import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import routes from './routes';
import './index.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import testJson from '../data/test.json';

class App extends Component {
  render() {
    console.log(testJson);

    return (
      <div className="App">
        <Header />
        <div className="Body">
          <Sidebar />
          <Switch>
            {routes.map(({ ...routeProps }) => (
              <Route {...routeProps} key={routeProps.path || ''} />
            ))}
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
