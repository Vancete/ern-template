import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../logo.svg';

class Home extends Component {
  render (){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          <Link to={'./Router'}>Router test</Link>
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

export default Home;