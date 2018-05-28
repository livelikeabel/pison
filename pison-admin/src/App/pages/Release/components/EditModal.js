import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import './EditModal.css';

import {
  setEditModalFalse,
  setLicensorModalTrue
} from '../../../../redux/meta/actions';

class EditModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.musicId);
    return (
      <div className="EditModalBackground">
        <div className="EditModal">
          <div className="Header">
            <span>Edit Release</span>
            <span
              className="Close"
              onClick={() =>
                this.props.setEditModalFalse({ showEditModal: false })
              }
            >
              X
            </span>
          </div>
          <div className="Infos">
            <div className="Info">
              <span>Licensor</span>{' '}
              <input value={this.props.licensor} className="FirstInfo" readOnly />{' '}
              <div
                className="EditButton"
                onClick={() => this.props.setLicensorModalTrue({ showLicensorModal: true })}
              >
                Edit
              </div>
            </div>
            <div className="Info">
              <span>Title</span>{' '}
              <input value={this.props.title} size="40" readOnly />
            </div>
            <div className="Info">
              <span>Title (Local)</span>{' '}
              <input value={this.props.titleLocal} readOnly />
            </div>
            <div className="Info">
              <span>Release date</span>{' '}
              <input value={this.props.releaseDate.slice(0, 10)} />
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
  connect(
    ({ meta, music }) => ({
      showLicensorModal: meta.showLicensorModal,
      showEditModal: meta.showEditModal,
      musicId: meta.musicId,
      licensor: meta.licensor,
      title: meta.title,
      titleLocal: meta.titleLocal,
      releaseDate: meta.releaseDate
    }),
    {
      setEditModalFalse,
      setLicensorModalTrue
    }
  )
)(EditModal);
