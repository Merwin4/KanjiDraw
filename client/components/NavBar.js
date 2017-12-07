import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// TODO Make the link flag between debug and live app version

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand"><Link to="/">Kanji Draw</Link></span>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/practice">Practice</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
            <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
