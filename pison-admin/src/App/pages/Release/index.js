import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import Input from './components/Input';
import Table from './components/Table';
import EditModal from './components/EditModal';

import './index.css';

import musicData from '../../../data/test.json';
import { getMusics } from '../../../redux/music/actions'

class Release extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getMusics( musicData.results );
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

export default compose(
  connect(({ music }) => ({
    
  }), {
    getMusics,
  })
)(Release);
