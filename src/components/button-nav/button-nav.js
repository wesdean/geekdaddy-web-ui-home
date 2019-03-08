import React, {Component} from 'react';
import './button-nav.scss';
import Button from "../button/button";

class ButtonNav extends Component {
  render() {
    const className = this.props.className ? ' ' + this.props.className : '';
    const children = [];
    if (Array.isArray(this.props.children)) {
      this.props.children.forEach((child, index) => {
        child = this.modifyChild(child, index);
        children.push(child);
      });
    } else {
      children.push(this.modifyChild(this.props.children))
    }
    return (
      <div className={`ButtonNav${className}`}>{children}</div>
    );
  }

  modifyChild = (child, index) => {
    if (child.type === Button && child.props.name) {
      const clickHandler = (child, callback) => {
        let active = child.props.name;
        if (this.props.toggle) {
          if (this.props.active === active) {
            active = null;
          }
        }

        if (typeof callback === 'function') {
          callback(active);
        }
      };

      child = React.cloneElement(child, {
        key: index,
        onClick: clickHandler.bind(this, child, this.props.onClick),
        isActive: this.props.active === child.props.name
      });
    } else {
      child = React.cloneElement(child, {key: index});
    }

    return child;
  };
}

export default ButtonNav;