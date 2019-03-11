import React, {Component} from 'react';
import './my-app-tag.scss';

class MyAppsTag extends Component {
  render() {
    const classNames = ['MyAppsTag'];
    if (this.props.className) {
      classNames.push(this.props.className);
    }

    return (
      <div className={classNames.join(' ')}>
        {this.props.children}
      </div>
    );
  }
}

export default MyAppsTag;