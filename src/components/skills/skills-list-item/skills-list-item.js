import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './skill-list-item.scss';

class SkillsListItem extends Component {
  render() {
    const classNames = ['SkillsListItem'];
    if (this.props.className) {
      classNames.push(this.props.className);
    }
    if (this.props.active) {
      classNames.push('active');
    }
    if (this.props.hidden) {
      classNames.push('hidden');
    }

    return (
      <div className={classNames.join(' ')} title={this.props.name}>
        {(() => {
          switch (this.props.iconType) {
            case 'fa':
              return <FontAwesomeIcon className="icon" icon={this.props.icon}
                                      onClick={this.clickHandler.bind(this, this.props.name)}/>;
            case 'image':
              return <img className="icon" src={this.props.icon} alt={this.props.name}
                          onClick={this.clickHandler.bind(this, this.props.name)}/>;
            default:
              return <div/>
          }
        })()}
      </div>
    );
  }

  clickHandler = (itemName) => {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(itemName);
    }
  }
}

export default SkillsListItem;