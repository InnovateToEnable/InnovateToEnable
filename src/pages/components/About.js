// About.js
import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import Login from "../Login.js";
import Test from "../Test.js";
import Forum from "./Forum.js";


class About extends Component {
  render() {
    return (
        <><h2>Welcome to Innovate to Empower</h2><nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            </ul>
        </nav><hr /></>
    );
  }
}

export default About;