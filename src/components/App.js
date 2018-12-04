import React, { Component } from 'react';

import './App.css';
import Button from './Button/Button';
import evaluate from '../util/evaluate';

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

  calculate = (equals) => {
    if (this.state.formulaDisplay.indexOf(equals) === -1) {
      let output = 0;
      let expression = '';

      if (!this.state.lastClickIsOp) {
        expression = this.state.formulaDisplay + this.state.currValue;
      } else {
        expression = this.state.formulaDisplay;
        expression = expression.slice(0, -1); 
      }

      output = evaluate(expression);

      this.setState({
        currValue: output,
        operator: '=',
        formulaDisplay: expression + equals + output,
        lastClickIsOp: true
      });      
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

  handleDecimal = () => {
    let num = this.state.currValue;

    if (num.toString().indexOf('.') === -1) {
      num += '.';
      this.setState({currValue: num})
    }
  }

  handleNumberClick(i) {
    let val = this.state.currValue;

    if (this.state.operator === '=') this.clear();
    if (this.state.lastClickIsOp) val = 0;

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

    if (this.state.prevValue === 0) {
      formula = this.state.currValue + op;
      this.setState((state) => ({prevValue: state.currValue}))
    }

    if (this.state.lastClickIsOp && this.state.operator === '=') {
      formula = this.state.currValue + op;
    } else if (this.state.lastClickIsOp && this.state.operator !== '=') {
      formula = this.state.formulaDisplay.slice(0, -1) + op;
    } else {
      formula = this.state.formulaDisplay + this.state.currValue + op;
    }

    this.setState({
      formulaDisplay: formula,
      operator: op,
      lastClickIsOp: true
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Calculator
        </header>
        <div id="display">
          <div className="formula">{this.state.formulaDisplay}</div>
          <div className="input">{this.state.currValue}</div>
        </div>
        <div className="operator">
          <Button id="add" label='+' handleClick={this.handleOpClick} />
          <Button id="subtract" label='-' handleClick={this.handleOpClick} />
          <Button id="multiply" label='*' handleClick={this.handleOpClick} />
          <Button id="divide" label='/' handleClick={this.handleOpClick} />
          <Button id="equals" label='=' handleClick={this.calculate} />                
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
