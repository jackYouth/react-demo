import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to={{ pathname: '/page1', state: { id: 222 } }}>Go To Page1</Link>
      </div>
    );
  }
}
