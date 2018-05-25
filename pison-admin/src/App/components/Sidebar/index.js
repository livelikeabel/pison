import React, { Component } from 'react';
import './index.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className='Sidebar'>
                <div>DELIVERY</div>
                <div>User</div>
                <div>Artist</div>
                <div>Label</div>
                <div>Release</div>
            </div>
        );
    }
}

export default Sidebar;