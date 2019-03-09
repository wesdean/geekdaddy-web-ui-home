import React, {Component} from 'react';
import SkillsListItem from "../skills-list-item/skills-list-item";
import './skills-list.scss';
import skills from '../../../data/skills';

class SkillsList extends Component {
  render() {
    const children = [];
    const selectedSkills = skills[this.props.selectedSkill];

    if (Array.isArray(selectedSkills)) {
      selectedSkills.forEach((skill, index) => {
        children.push(<SkillsListItem
          skill={skill}
          key={index}
          onClick={this.selectItem}
          active={this.props.selectedSkillItem === skill.name}
          hidden={this.props.selectedSkillItem && this.props.selectedSkillItem !== skill.name}/>)
      });
    }

    return (
      <div className="SkillsList">
        {children}
      </div>
    );
  }

  selectItem = (itemName) => {
    if (typeof this.props.onSkillItemSelected === 'function') {
      this.props.onSkillItemSelected(itemName);
    }
  };
}

export default SkillsList;