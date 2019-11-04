/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/css/App.css';
import calculate from '../logic/calculate';

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
