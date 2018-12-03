import React, { Component } from 'react';

import './App.css';
import Button from './Button/Button';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currValue: 0,
      prevValue: 0,
      operator: '',
      formulaDisplay: '',
      lastClickIsOp: false
    };
    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleOpClick = this.handleOpClick.bind(this);
  }

  handleNumberClick(i) {
    let val = this.state.currValue
    if (this.state.lastClickIsOp) {
      val = 0;
    }

    if (val === 0 && i === 0) {

    } else if (val === 0 && i !== 0) {
      this.setState({currValue: i});
    } else {
      val = val + i.toString();
      this.setState({currValue: val});
    }
    
    this.setState({lastClickIsOp: false});
  }

  handleOpClick(op) {
    let formula = '';  

    this.setState({
      formulaDisplay: formula,
      operator: op,
      lastClickIsOp: true
    })
  }

  handleDecimal = () => {
    let num = this.state.currValue;

    if (num.toString().indexOf('.') === -1) {
      num += '.';
      this.setState({currValue: num})
    }
  }

  clear = () => {
    this.setState({
      currValue: 0,
      prevValue: 0,
      operator: '',
      formulaDisplay: '',
      lastClickIsOp: false
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Calculator
        </header>
        <div className="display">
          <div className="formula">{this.state.formulaDisplay}</div>
          <div className="input">{this.state.currValue}</div>
        </div>
        <div className="operator">
          <Button id="add" label='+' handleClick={this.handleOpClick} />
          <Button id="subtract" label='-'  />
          <Button id="multiply" label='*' />
          <Button id="divide" label='/' />
          <Button id="equals" label='=' />                
        </div>
        <div className="digit">
          <Button id="zero" label={0} handleClick={this.handleNumberClick} />
          <Button id="one" label={1}  handleClick={this.handleNumberClick} />
          <Button id="two" label={2}  handleClick={this.handleNumberClick} />
          <Button id="three" label={3}  handleClick={this.handleNumberClick} />
          <Button id="four" label={4}  handleClick={this.handleNumberClick} />
          <Button id="five" label={5}  handleClick={this.handleNumberClick} />
          <Button id="six" label={6}  handleClick={this.handleNumberClick} />
          <Button id="seven" label={7}  handleClick={this.handleNumberClick} />
          <Button id="eight" label={8}  handleClick={this.handleNumberClick} />
          <Button id="nine" label={9}  handleClick={this.handleNumberClick} />
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
