import React, { Component } from 'react';

import Input from './components/Input';
import Table from './components/Table';
import EditModal from './components/EditModal';

import './index.css';

class Release extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };

    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    console.log('hi im modal');
    this.setState({
      ...this.state,
      showModal: true
    });
  }

  render() {
    return (
      <div className="Release">
        {this.state.showModal ? <EditModal /> : <div />}
        <div className="Template">
          <Input />
          <Table showModal={this.showModal} />
        </div>
      </div>
    );
  }
}

export default Release;
