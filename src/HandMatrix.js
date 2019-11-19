import React from 'react'
import { pfIndexToPocket } from './HandMappings.js'


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
  }
}

function Row({ index, ranges, Cell }) {
  const array = []
  let k
  ranges.forEach((c, k) => {
    array.push(
      <Cell
        index={index * 13 + k}
        value={c}
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

export default function HandMatrix({range, Cell}) {
  return (
    <div styles={styles.root}>
      {(range.length > 0) &&
        chunk(range, 13)
          .map((row, i) =>
            <div style={styles.row}>
              <Row ranges={row} index={i} Cell={Cell} />
            </div>)}
    </div>
  )
}
