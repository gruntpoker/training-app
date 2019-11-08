import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { pfIndexToPocket } from './HandMappings.js'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function chunk(array, size) {
  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  }
  return chunked_arr;
}
const styles = {
  root: {
    flexDirection: "column",
    display: "flex",
    width: "500px"
  },
  row: {
    display: "flex"
  },
  cell: {
    width: "40px",
    height: "40px",
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: '1px',
    lineHeight: '40px'
  },
}

function Cell({ action, index, raisePercent }) {
  const backgroundColor = action === 'r' ? 'green' : action === 'c' ? 'yellow' : 'white'
  return (
    <div style={{ ...styles.cell, backgroundColor }}>{pfIndexToPocket[index]}</div>
  )

}
function Row({ index, ranges }) {
  const array = []
  let k
  ranges.forEach((c, k) => {
    array.push(
      <Cell
        key={index * 13 + k}
        index={index * 13 + k}
        action={c.action}
      >
      </Cell>
    )
  })
  return (
    <div style={styles.row}>
      {array}
    </div>
  );
}
function buildFetchURL(situation, hero, villain, caller){
  let url = '/ranges/'+situation+'/'+hero
  if(villain){
    url = url+'/'+villain
  }
  if(caller){
    url=url+'/'+caller
  }
  console.log(url)
  return url
}

export default function HandMatrix() {
  const [range, setRange] = useState([])
  const query = new URLSearchParams(useLocation().search)
  const situation = query.get('situation')
  const hero = query.get('hero')
  const villain = query.get('villain')
  const caller = query.get('caller')
  const url = buildFetchURL(situation, hero, villain, caller)
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      res.json().then(res => {
        setRange(res)
      })
    }
    fetchData();
  }, []);
  const array = new Array()
  let k
  for (k = 0; k < 13; k++) {
    array.push(
      <Row key={k} index={k} range={range} />
    )
  }
  return (
    <div styles={styles.root}>
      {(range.length > 0) &&
        chunk(range, 13)
          .map((row, i) =>
            <div style={styles.row}>
              <Row ranges={row} index={i} />
            </div>)}
    </div>
  )
}
