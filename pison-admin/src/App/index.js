import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import routes from './routes';
import './index.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {

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
