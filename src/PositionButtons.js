import React from 'react';
import { useLocation, Link, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import PositionButton from './PositionButton'
import Button from 'react-bootstrap/Button';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const situations = {
  'open': 'Open position',
  'facing-raise': 'Facing a raise:',
  'facing-3bet': 'Facing a 3bet after my raise:',
  'facing-4bet': 'Facing a 4bet after my 3bet:',
  'squeeze': 'Squeeze from the blinds:'
}
const subHeaders = {
  'open': "",
  'facing-raise': ['Who raises?'],
  'facing-3bet': ['Who 3bets?'],
  'facing-4bet': ['Who raises and 4bets:'],
  'squeeze': ['Who Raises?', 'Who Calls?']
}
function getSubHeader(query) {
  const isHero = query.get("hero")
  const isVillian = query.get('villain')
  const situation = query.get('situation')
  if (situation === 'squeeze'){
    if(!isHero){
      return "What's My Position?"
    } else if (isHero && !isVillian){
      return "Who Raises?"
    } else{
      return "Who Calls?"
    }
  }
  if(isHero){
    return subHeaders[situation]
  }else {
    return "What's My Position?"
  }
}
export default function PositionButtons(props) {
  const query = useQuery()
  return (
    <div>
      <h2>{situations[query.get('situation')]}</h2>
      <h5>{getSubHeader(query)}</h5>
      <p>
        {[1, 2, 3, 4, 5, 6].map((v, i) => <PositionButton key={i} position={v} />)}
      </p>
      <Route path="/position/situation/ready">
        <Link to={{
          pathname: "/analyze",
          search: query.toString()
        }}>
          <Button variant='success'>Analyze Position</Button>
        </Link>
      </Route>
    </div>
  )
}