import React, {Component} from 'react';
import './button.scss';

class Button extends Component {
  render() {
    return (
      <div className="Button">
        <div className="Button-text">{this.props.children}</div>
      </div>
    );
  }
}

export default Button;