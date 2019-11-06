import React from 'react';
import open from './open'
import { useLocation } from 'react-router-dom'
import { pfIndexToPocket } from './HandMappings.js'

function useQuery() {
  return new URLSearchParams(useLocation().search);
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
function Row({ index }) {
  const array = []
  let k
  for (k = 0; k < 13; k++) {
    array.push(
      <Cell
        key={index * 13 + k}
        index={index * 13 + k}
        action={open[1][index * 13 + k].action}
      >
      </Cell>
    )
  }
  return (
    <div style={styles.row}>
      {array}
    </div>
  );
}

export default function HandMatrix() {
  const array = new Array()
  let k
  for (k = 0; k < 13; k++) {
    array.push(
      <Row key={k} index={k} />
    )
  }
  return (
    <div styles={styles.root}>
      {array}
    </div>
  )
}
