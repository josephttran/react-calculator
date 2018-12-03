import React, { Component } from 'react';

import './button.css';

class Button extends Component {
  render() {
    return (
      <button onClick={() => this.props.handleClick(this.props.label)}>
        {this.props.label}
      </button>
    )
  }
}

export default Button;