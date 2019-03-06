import React, {Component} from 'react';
import './button-nav.scss';

class ButtonNav extends Component {
  render() {
    return (
      <div className="ButtonNav">{this.props.children}</div>
    );
  }
}

export default ButtonNav;