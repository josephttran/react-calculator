import React, { Component } from 'react';

import './App.css';
import Button from './Button/Button';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    };
    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleOpClick = this.handleOpClick.bind(this);
  }

  handleNumberClick(i) {
    if (this.state.value === 0 && i == 0) {

    } else if (this.state.value === 0 && i != 0) {
      this.setState({value: i});
    } else {
      this.setState({value: this.state.value + i});
    }
  }

  handleOpClick(op) {
    this.setState({operator: op});
  }

  handleDecimal = () => {
    let num = this.state.value;

    if (num === 0) {
      num += '.';    
      this.setState({value: num})
    } else {
      if (num.indexOf('.') === -1) {
        num += '.';
        this.setState({value: num})
      }
    }
  }

  clear = () => {
    this.setState({
      value: 0
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Calculator
        </header>
        <div className="display">{this.state.value}</div>
        <div className="operator">
          <Button id="add" label='+' />
          <Button id="subtract" label='-' />
          <Button id="multiply" label='*' />
          <Button id="divide" label='/' />
          <Button id="equals" label='=' />                
        </div>
        <div className="digit">
          <Button id="zero" label='0' handleClick={this.handleNumberClick} />
          <Button id="one" label='1'  handleClick={this.handleNumberClick} />
          <Button id="two" label='2'  handleClick={this.handleNumberClick} />
          <Button id="three" label='3'  handleClick={this.handleNumberClick} />
          <Button id="four" label='4'  handleClick={this.handleNumberClick} />
          <Button id="five" label='5'  handleClick={this.handleNumberClick} />
          <Button id="six" label='6'  handleClick={this.handleNumberClick} />
          <Button id="seven" label='7'  handleClick={this.handleNumberClick} />
          <Button id="eight" label='8'  handleClick={this.handleNumberClick} />
          <Button id="nine" label='9'  handleClick={this.handleNumberClick} />
        </div>
        <div className="decimal">
          <Button id="decimal" label="." handleClick={this.handleDecimal} />
        </div>
        <div className="clear">
          <Button id="clear" label="clear" handleClick={this.clear} />
        </div>
      </div>
    );
  }
}

export default App;
