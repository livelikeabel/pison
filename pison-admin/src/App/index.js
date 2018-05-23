import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import routes from "./routes";
import "./index.css";

import testJson from "../data/test.json";

class App extends Component {
  render() {
    console.log(testJson);

    return (
      <div className="App">
        <Switch>
          {routes.map(({ ...routeProps }) => (
            <Route {...routeProps} key={routeProps.path || ""} />
          ))}
        </Switch>
      </div>
    );
  }
}

export default App;
