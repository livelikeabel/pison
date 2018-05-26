import React, { Component } from 'react';

import Input from './components/Input';

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
          <div>table이야</div>
        </div>
      </div>
    );
  }
}

export default Release;
