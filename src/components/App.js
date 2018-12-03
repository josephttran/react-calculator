import React, { Component } from 'react';

import './App.css';
import Button from './Button/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Calculator
        </header>
        <div className="display">0</div>
        <div className="operator">
          <Button id="add" label='+' />
          <Button id="subtract" label='-' />
          <Button id="multiply" label='*' />
          <Button id="divide" label='/' />
          <Button id="equals" label='=' />                
        </div>
        <div className="digit">
          <Button id="zero" label='0' />
          <Button id="one" label='1' />
          <Button id="two" label='2' />
          <Button id="three" label='3' />
          <Button id="four" label='4' />
          <Button id="five" label='5' />
          <Button id="six" label='6' />
          <Button id="seven" label='7' />
          <Button id="eight" label='8' />
          <Button id="nine" label='9' />
        </div>
        <div className="decimal">
          <Button id="decimal" label="." />
        </div>
        <div className="clear">
          <Button id="clear" label="clear" />
        </div>
      </div>
    );
  }
}

export default App;
