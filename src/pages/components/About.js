// About.js
import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import Login from "../Login.js";
import Test from "../Test.js";
import Forum from "./Forum.js";
import innovateLogo from './resources/imgs/innovate.jpg';


class About extends Component {
  render() {
    return (
        <img src={innovateLogo}/>
    );
  }
}

export default About;