import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './skill-list-item.scss';

class SkillsListItem extends Component {
  render() {
    if (!this.props.skill) {
      return null;
    }

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
      <div className={classNames.join(' ')} title={this.props.skill.name}>
        <figure>
        {(() => {
          switch (this.props.skill.iconType) {
            case 'fa':
              return <FontAwesomeIcon className="icon" icon={this.props.skill.icon}
                                      onClick={this.clickHandler.bind(this, this.props.skill.name)}/>;
            case 'image':
              return <img className="icon" src={this.props.skill.icon} alt={this.props.skill.name}
                          onClick={this.clickHandler.bind(this, this.props.skill.name)}/>;
            default:
              return <div/>
          }
        })()}
          <figcaption>
            <p>{this.props.skill.name}</p>
            <p>{this.props.skill.description}</p>
          </figcaption>
        </figure>
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