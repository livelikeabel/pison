import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import Input from './components/Input';
import Table from './components/Table';
import EditModal from './components/EditModal';

import './index.css';

class Release extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Release">
        {this.props.showEditModal ? <EditModal /> : <div />}
        <div className="Template">
          <Input />
          <Table />
        </div>
      </div>
    );
  }
}

export default compose(
  connect(({ meta }) => ({
    showEditModal: meta.showEditModal,
  }))
)(Release);
