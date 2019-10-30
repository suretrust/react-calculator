/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  render() {
    return (
      <div id="calculator">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
