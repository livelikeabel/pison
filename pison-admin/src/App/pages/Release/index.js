import React, { Component } from 'react';

import Input from './components/Input';
import Table from './components/Table';

import './index.css';

class Release extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Release">
        <div className="Template">
          <Input />
          <Table />
        </div>
      </div>
    );
  }
}

export default Release;
