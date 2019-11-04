import React from 'react';
import './App.css';
import ScenarioList from './ScenarioList'
import PositionButtons from './PositionButtons'
import Analysis from './Analysis'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/analyze">
            <Analysis></Analysis>
          </Route>
          <Route path="/position">
            <PositionButtons />
          </Route>
          <Route path="/">
            <ScenarioList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
