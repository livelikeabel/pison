import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import './LicensorModal.css';

import { setLicensorModalFalse } from '../../../../redux/meta/actions';

class LicensorModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="LicensorModalBackground">
        <div className="LicensorModal">
          <div className="Header">
            <span>Licensor</span>
            <span
              className="Close"
              onClick={() =>
                this.props.setLicensorModalFalse({ showLicensorModal: false })
              }
            >
              X
            </span>
          </div>
          <div className="Info">
            <span>Name</span>{' '}
            <input value=" Pison Contents" />{' '}
            <div
              className="SubmitButton"
              onClick={() =>
                alert('hi')
              }
            >
              Submit
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  connect(
    ({ meta }) => ({
      showLicensorModal: meta.showLicensorModal
    }),
    {
      setLicensorModalFalse
    }
  )
)(LicensorModal);
