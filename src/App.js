import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScenarioSelector from './ScenarioSelector';
import CashRanges from './CashRanges'
import HeadsUp from './HeadsUP/HeadsUp'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/heads-up">
            <HeadsUp></HeadsUp>
          </Route>
          <Route path="/analyze">
            <CashRanges></CashRanges>
          </Route>
          <Route path="/">
            <ScenarioSelector />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
