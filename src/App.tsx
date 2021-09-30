import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Houses from "./components/Houses/Houses.component";
import Landing from "./components/Landing/Landing.component";
import HousesAll from "./components/Houses/HousesAll.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/houses/" exact component={Houses} />
          <Route path="/houses/all" exact component={HousesAll} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
