import React, {Component} from 'react';
import './button.scss';

class Button extends Component {
  render() {
    const classNames = ['Button'];
    if (this.props.className) {
      classNames.push(this.props.className);
    }
    if (this.props.isActive) {
      classNames.push('active');
    }
    return (
      <div className={classNames.join(' ')} onClick={this.props.onClick}>
        <div className="Button-text">{this.props.children}</div>
      </div>
    );
  }
}

export default Button;