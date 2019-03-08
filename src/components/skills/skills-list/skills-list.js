import React, {Component} from 'react';
import SkillsListItem from "../skills-list-item/skills-list-item";
import './skills-list.scss';

class SkillsList extends Component {
  render() {
    const children = [];

    if (Array.isArray(this.props.skills)) {
      this.props.skills.forEach((skill, index) => {
        children.push(<SkillsListItem name={skill.name} icon={skill.icon} iconType={skill.iconType} key={index}/>)
      });
    }

    return (
      <div className="SkillsList">
        {children}
      </div>
    );
  }
}

export default SkillsList;