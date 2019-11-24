import React, { useEffect, useState } from 'react'
import HandMatrix from '../Components/HandMatrix'
import { pfIndexToPocket } from '../Components/handMappings'
import processRange, { getInitRange } from './processRange'
const styles = {
  cell: {
    width: "40px",
    height: "40px",
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: '1px',
    lineHeight: '40px'
  }
}
const actionColors = {
  'limp': 'pink',
  'call-3x': 'lime',
  'call-jam': 'blue',
  'raise': 'red',
  'jam': 'yellow',
  'fold': 'white'
}
const Cell = function ({ index, value }) {
  const backgroundColor = actionColors[value]
  return (
    <div style={{ ...styles.cell, backgroundColor }}>{pfIndexToPocket[index]}</div>
  )
}

const actionName = {
  limp: 'Limp'
}

function Button(action, pos) {
  return
}

export default function () {
  const bb = 25
  const [range, setRange] = useState(getInitRange())
  const [action, setAction] = useState(null)
  const [pos, setPos] = useState('sb')
  const range = processRange(bb, pos, action)
  const onClick = () => {
    setAction(action)
    setRange(range)
  }
  const Button = action => <button
    type="button"
    className="btn btn-primary btn-lg"
    style={{ backgroundColor: actionColors[action], margin: 20 }}
    onClick
  >
    {actionName[action]}
  </button>
  return <div>
    <HandMatrix
      range={range}
      Cell={Cell}>
    </HandMatrix>
    {actions.map(action => Button(action))}
    }  </div >
}