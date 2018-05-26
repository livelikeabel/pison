import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className='Sidebar'>
                <div className="TopCategory">DELIVERY</div>
                <div className="SubCategory"><Link to="/user">User</Link></div>
                <div className="SubCategory"><Link to="/artist">Artist</Link></div>
                <div className="SubCategory"><Link to="/label">Label</Link></div>
                <div className="SubCategory"><Link to="/release">Release</Link></div>
            </div>
        );
    }
}

export default Sidebar;