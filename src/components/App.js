import React, { Component } from 'react';

import './App.scss';
import Display from './Display/Display';
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
        operator: equals,
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

    if (this.state.operator === '=') {
      this.clear();
      num = '0.';
    }

    if (this.state.lastClickIsOp) num = '0.';
    if (num.toString().indexOf('.') === -1) num += '.';

    this.setState({
      currValue: num, 
    })
  }

  handleNumberClick(i) {
    let val = this.state.currValue;

    if (this.state.operator === '=') this.clear();
    if (this.state.lastClickIsOp && val !== '0.') val = 0;

    if (val === 0) {
      val = i;
    } else {
      val = val + i.toString();
    }
    
    this.setState({
      currValue: val, 
      lastClickIsOp: false
    });
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

  renderButton(id, label, handle) {
    return (
      <Button
        id={id}
        value={label}
        handleClick={handle}
      />
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Calculator
        </header>
        <div id="display">
          <Display id="formula" data={this.state.formulaDisplay} />
          <Display id="input" data={this.state.currValue} />
        </div>
        <div className="btn-container">
          {this.renderButton("add",'+', this.handleOpClick)}
          {this.renderButton("subtract", '-', this.handleOpClick)}
          {this.renderButton("multiply", '*', this.handleOpClick)}
          {this.renderButton("divide", '/', this.handleOpClick)}
          {this.renderButton("equals", '=', this.calculate)}
          {this.renderButton("zero", 0, this.handleNumberClick)}
          {this.renderButton("one", 1, this.handleNumberClick)}
          {this.renderButton("two", 2, this.handleNumberClick)}
          {this.renderButton("three", 3, this.handleNumberClick)}
          {this.renderButton("four", 4, this.handleNumberClick)}
          {this.renderButton("five", 5, this.handleNumberClick)}
          {this.renderButton("six", 6, this.handleNumberClick)}
          {this.renderButton("seven", 7, this.handleNumberClick)}
          {this.renderButton("eight", 8, this.handleNumberClick)}
          {this.renderButton("nine", 9, this.handleNumberClick)}
          {this.renderButton("decimal", ".", this.handleDecimal)}
          {this.renderButton("clear", "clear", this.clear)}
      </div>
      </div>
    );
  }
}

export default App;
