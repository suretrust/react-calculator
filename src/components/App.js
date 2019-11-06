import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/css/App.css';
import calculate from '../logic/calculate';

class App extends React.Component {
  state = {
    total: undefined,
    next: undefined,
    operation: null,
    calcProcess: undefined
  };

  handleClick = buttonName => {
    this.setState(prevState => calculate(prevState, buttonName));
  };

  render() {
    const { total, next, calcProcess } = this.state;

    return (
      <div id="main">
        <Display result={next || total} calcProcess={calcProcess} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
