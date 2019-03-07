import React, {Component} from 'react';
import './button-nav.scss';
import Button from "../button/button";

class ButtonNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: props.active
    };
  }

  render() {
    const className = this.props.className ? ' ' + this.props.className : '';
    const children = [];
    this.props.children.forEach((child, index) => {
      if (child.type === Button && child.props.name) {
        const clickHandler = (child, callback) => {
          this.setState({active: child.props.name});
          if (typeof callback === 'function') {
            callback(child.props.name);
          }
        };

        child = React.cloneElement(child, {
          key: index,
          onClick: clickHandler.bind(this, child, this.props.onClick),
          isActive: this.state.active === child.props.name
        });
      } else {
        child = React.cloneElement(child, {key: index});
      }
      children.push(child);
    });
    return (
      <div className={`ButtonNav${className}`}>{children}</div>
    );
  }
}

export default ButtonNav;