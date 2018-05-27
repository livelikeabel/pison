import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import './EditModal.css';

import { setEditModalFalse, setLicensorModalTrue } from '../../../../redux/meta/actions';

class EditModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="EditModalBackground">
        <div className="EditModal">
          <div className="Header">
            <span>Edit Release</span>
            <span className="Close" onClick={() => this.props.setEditModalFalse({showEditModal: false})}>X</span>
          </div>
          <div className="Infos">
            <div className="Info">
              <span>Licensor</span>{' '}
              <input value="Pison Contents" className="FirstInfo" />{' '}
              <div className="EditButton" onClick={() => this.props.setLicensorModalTrue({showLicensorModal: true})}>Edit</div>
            </div>
            <div className="Info">
              <span>Title</span>{' '}
              <input value="PisonRelease" size="40" readOnly />
            </div>
            <div className="Info">
              <span>Title (Local)</span> <input value="비손 콘텐츠" readOnly />
            </div>
            <div className="Info">
              <span>Release date</span> <input value="2018-04-30" />
            </div>
          </div>
          <div className="Footer">
            <span className="RemoveButton">Remove Release</span>
            <span className="UpdateButton">Update Release</span>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  connect(({ meta }) => ({
    showLicensorModal: meta.showLicensorModal,
    showEditModal: meta.showEditModal,
  }), {
    setEditModalFalse,
    setLicensorModalTrue,
  })
)(EditModal);
