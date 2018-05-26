import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="InputComponent">
        {/* <form className="Input" onSubmit={this.handleSubmit}> */}
        <form className="Form">
          {/* <select value={this.state.menu} onChange={this.handleMenuChange}> */}
          <select className="Select">
            <option value="5">5</option>
            <option value="10">10</option>
            <option selected value="15">15</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <div className="InputAndSearch">
            <input className="Input" placeholder="Type text" />
            <input className="Search" type="submit" value="Search" />
          </div>
        </form>
      </div>
    );
  }
}

export default Input;
