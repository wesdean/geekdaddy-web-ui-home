import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './skill-list-item.scss';

class SkillsListItem extends Component {
  render() {
    return (
      <div className="SkillsListItem" title={this.props.name}>
        {(() => {
          switch (this.props.iconType) {
            case 'fa':
              return <FontAwesomeIcon icon={this.props.icon}/>;
            case 'image':
              return <img src={this.props.icon} alt={this.props.name}/>;
            default:
              return <div/>
          }
        })()}
      </div>
    );
  }
}

export default SkillsListItem;