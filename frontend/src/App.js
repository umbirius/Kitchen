import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserContainer from './containers/UserContainer.js'
import EstablishmentContainer from './containers/EstablishmentContainer';

class App extends Component {
  render() {
  return (
    <div className="User-form">
      <UserContainer />
      <EstablishmentContainer />
    </div >
  );
  }

}

export default App;
