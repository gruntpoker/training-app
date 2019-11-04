import React from 'react'

import { Link } from "react-router-dom";

export default function ScenarioList() {
  return (
    <React.Fragment>
      <h2>Choose the preflop situation you want to see:</h2>
      <ul>
        <li>
          <Link to='/position?situation=open'>Open position</Link>
        </li>
        <li>
          <Link to="/position?situation=facing-raise">Facing a raise</Link>
        </li>
        <li>
          <Link to="/position?situation=facing-3bet">Facing a 3bet after my raise</Link>
        </li>
        <li>
          <Link to="/position?situation=facing-4bet">Facing a 4bet after my 3bet</Link>
        </li>
        <li>
          <Link to="/position?situation=squeeze">Squeeze from the blinds</Link>
        </li>
      </ul>
    </React.Fragment>
  )
}