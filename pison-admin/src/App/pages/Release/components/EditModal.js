import React, { Component } from 'react';

import './EditModal.css';

class EditModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="EditModal">
        <div className="Header">
          <span>Edit Release</span>
          <span>X</span>
        </div>
        <div className="Infos">
          <div className="Info">
            <span>Licensor</span> <input value="Pison Contents" className="FirstInfo"/> <div className="EditButton">Edit</div>
          </div>
          <div className="Info">
            <span>Title</span> <input value="PisonRelease" size="40" readOnly/>
          </div>
          <div className="Info">
            <span>Title (Local)</span> <input value="비손 콘텐츠" readOnly/>
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
    );
  }
}

export default EditModal;
