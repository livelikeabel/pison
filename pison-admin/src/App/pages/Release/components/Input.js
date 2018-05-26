import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <form className="Input" onSubmit={this.handleSubmit}> */}
        <form className="Input">
          <label>
            {/* <select value={this.state.menu} onChange={this.handleMenuChange}> */}
            <select>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
          <label>
            <input placeholder="Type text" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Input;
