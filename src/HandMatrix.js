import React from 'react';

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

export default function HandMatrix() {

  function Row({ index }) {
    const array = new Array()
    let k
    for (k = 0; k < 13; k++) {
      array.push(
        <div key={index * 13 + k} style={styles.cell}>{index * 13 + k}</div>
      )
    }
    return (
      <div style={styles.row}>
        {array}
      </div>
    );
  }

  function Matrix() {
    const array = new Array()
    let k
    for (k = 0; k < 13; k++) {
      array.push(
        <Row key={k} index={k} />
      )
    }
    return (
      <React.Fragment>
        {array}
      </React.Fragment>
    )
  }

  return (
    <div styles={styles.root}>
      {<Matrix />}
    </div>
  );
}
