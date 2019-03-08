import React, {Component} from 'react';
import SkillsNav from "./skills-nav/skills-nav";
import './skills.scss';
import SkillsList from "./skills-list/skills-list";
import skills from '../../data/skills';

class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <div className="Skills-section-label">Skills</div>
        <SkillsNav selectedSkill={this.props.selectedSkill} changeSkillHandler={this.changeSelectedSkill}/>
        <SkillsList skills={skills[this.props.selectedSkill]}/>
      </div>
    );
  }

  changeSelectedSkill = (skillName) => {
    if (typeof this.props.onSelectedSkillChanged === 'function') {
      this.props.onSelectedSkillChanged(skillName);
    }
  };
}

export default Skills;