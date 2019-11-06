import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScenarioSelector from './ScenarioSelector';
import HandMatrix from './HandMatrix'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/analyze">
            <HandMatrix></HandMatrix>
          </Route>
          <Route path="/">
            <ScenarioSelector />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
