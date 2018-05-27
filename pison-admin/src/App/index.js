import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import routes from './routes';
import './index.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EditModal from './pages/Release/components/EditModal';
import LicensorModal from './pages/Release/components/LicensorModal';

class App extends Component {
  render() {

    return (
      <div className="App">
        {this.props.showEditModal ? <EditModal /> : <div />}
        {this.props.showLicensorModal ? <LicensorModal /> : <div />}
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
    showLicensorModal: meta.showLicensorModal,
  }))
)(withRouter(App));
