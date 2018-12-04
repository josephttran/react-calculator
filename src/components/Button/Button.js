import React, { Component } from 'react';

import './button.css';

class Button extends Component {
  render() {
    return (
      <button onClick={() => this.props.handleClick(this.props.value)}>
        {this.props.value}
      </button>
    )
  }
}

export default Button;