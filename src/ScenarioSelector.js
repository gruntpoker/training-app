import React, { useState } from 'react'
import { Route, Link, Redirect } from "react-router-dom";
const positions = [
  { seat: 1, name: '1' },
  { seat: 2, name: '2' },
  { seat: 3, name: '3' },
  { seat: 4, name: 'D' },
  { seat: 5, name: 'SB' },
  { seat: 6, name: 'BB' }
]
const headers = {
  'select': 'Choose the preflop situation you want to see:',
  'open': 'Open position',
  'facing-raise': 'Facing a raise:',
  'facing-3bet': 'Facing a 3bet after my raise:',
  'facing-4bet': 'Facing a 4bet after my 3bet:',
  'squeeze': 'Squeeze from the blinds:'
}
const subHeaders = {
  'open': ['What\'s My Position?'],
  'facing-raise': ['What\'s My Position?', 'Who raises?'],
  'facing-3bet': ['What\'s My Position?', 'Who 3bets?'],
  'facing-4bet': ['What\'s My Position?', 'Who raises and 4bets:'],
  'squeeze': ['What\'s My Position?', 'Who Raises?', 'Who Calls?']
}
const steps = {
  'open': 0,
  'facing-raise': 1,
  'facing-3bet': 1,
  'facing-4bet': 1,
  'squeeze': 2
}
const situations = [
  { situation: 'open', label: 'Open position' },
  { situation: 'facing-raise', label: 'Facing a raise' },
  { situation: 'facing-3bet', label: 'Facing a 3bet after my raise' },
  { situation: 'facing-4bet', label: 'Facing a 4bet after my 3bet' },
  { situation: 'squeeze', label: 'Squeeze from the blinds' }

]
const players = ['hero', 'villain', 'caller']
const seatsInit = {
  hero: null,
  villain: null,
  caller: null
}
function isDisabled(situation, position, hero, villain, step) {
  return (situation === 'open' && position === 6) ||
    (situation === 'facing-raise' && step === 0 && position === 1) ||
    (situation === 'facing-raise' && step === 1 && position >= hero) ||
    (situation === 'facing-3bet' && step === 0 && position === 6) ||
    (situation === 'facing-3bet' && step === 1 && position <= hero) ||
    (situation === 'facing-4bet' && step === 0 && position === 1) ||
    (situation === 'facing-4bet' && step === 1 && position >= hero) ||
    (situation === 'squeeze' && step === 2 && position <= villain) ||
    (situation === 'squeeze' && step === 2 && position >= hero) ||
    (situation === 'squeeze' && step === 0 && position < 5) ||
    (situation === 'squeeze' && hero === 5 && step === 1 && position > 3) ||
    (situation === 'squeeze' && hero === 6 && step === 1 && position > 4)
}
function createQuery(hero, villain, caller, situation) {
  const query = new URLSearchParams()
  if (hero) query.set('hero', hero)
  if (villain) query.set('villain', villain)
  if (caller) query.set('caller', caller)
  if (situation) query.set('situation', situation)
  return query.toString()
}
function ScenarioSelector() {
  const [situation, setSituation] = useState('notSelected')
  const [step, setStep] = useState(0);
  const [seats, setSeats] = useState(seatsInit)
  const onSelectSituation = situation => () => {
    setSituation(situation)
    setStep(0)
    setSeats(seatsInit)
  }
  const onSelectPosition = (seat) => () => {
    const newSeats = { ...seats }
    newSeats[players[step]] = seat
    setSeats(newSeats)
    if (step < steps[situation]) {
      setStep(step + 1)
    }
  }
  function getButtonClassname(i, seats) {
    if (i === seats.hero) {
      return 'btn btn-outline-warning'
    } else if (i === seats.villain) {
      return 'btn btn-outline-danger'
    } else if (i === seats.caller) {
      return 'btn btn-outline-success'
    } else {
      return 'btn btn-outline-info'
    }
  }
  return <div>
    <Route exact path="/">
      <h2>{headers['select']}</h2>
      <ul>
        {situations.map((v, i) =>
          <li><Link key={i} to='/position' onClick={onSelectSituation(v.situation)}>{v.label}</Link></li>)}
      </ul>
    </Route>
    <Route path="/position/">
      { situation === 'notSelected' && <Redirect to="/" /> }
      <h2>{headers[situation]}</h2>
      <h5>{subHeaders[situation] && subHeaders[situation][step]}</h5>
      {positions.map((v, i) =>
        <button
          key={i}
          onClick={onSelectPosition(v.seat)}
          type="button"
          className={getButtonClassname(v.seat, seats)}
          disabled={isDisabled(situation, v.seat, seats.hero, seats.villain, step)}
        >
          {v.name}
        </button>)
      }
      <p>
        {(seats[players[step]] > 0) && <Link to={{
          pathname: "/analyze",
          search: createQuery(seats.hero, seats.villain, seats.caller, situation)
        }}>
          <button type="button" class="btn btn-primary">Analyze</button>
        </Link>}
      </p>
    </Route>
  </div>
}
export default ScenarioSelector