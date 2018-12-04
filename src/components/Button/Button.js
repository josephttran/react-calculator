import React, { Component } from 'react';

import './button.scss';

class Button extends Component {
  render() {
    return (
      <button className="btn" id={this.props.id} onClick={() => this.props.handleClick(this.props.value)}>
        {this.props.value}
      </button>
    )
  }
}

export default Button;