import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../logo.svg';

class Router extends Component {
  render (){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Router is working! <Link to={'./'}>Go back</Link>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )}
}

export default Router;