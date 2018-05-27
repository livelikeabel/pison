import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import routes from './routes';
import './index.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EditModal from './pages/Release/components/EditModal';

class App extends Component {
  render() {

    return (
      <div className="App">
        {this.props.showEditModal ? <EditModal /> : <div />}
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

export default compose(
  connect(({ meta }) => ({
    showEditModal: meta.showEditModal,
  }))
)(withRouter(App));
