import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import './LicensorModal.css';

import { setLicensorModalFalse, changeLicensorInput } from '../../../../redux/meta/actions';

class LicensorModal extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  handleChange = (e) => {
    this.props.changeLicensorInput(e.target.value);
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
            <input value={this.props.licensor} onChange={this.handleChange} />{' '}
            <div
              className="SubmitButton"
              onClick={() =>
                this.props.setLicensorModalFalse({ showLicensorModal: false })
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
      showLicensorModal: meta.showLicensorModal,
      licensor: meta.licensor,
    }),
    {
      setLicensorModalFalse,
      changeLicensorInput,
    }
  )
)(LicensorModal);
