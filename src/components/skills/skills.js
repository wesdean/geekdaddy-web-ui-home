import React, {Component} from 'react';
import SkillsNav from "./skills-nav/skills-nav";
import './skills.scss';
import SkillsList from "./skills-list/skills-list";

class Skills extends Component {
  render() {
    return (
      <div className="Skills" id="skills">
        <div className="Skills-section-label">Skills</div>
        <SkillsNav selectedSkill={this.props.selectedSkill} changeSkillHandler={this.props.onSelectedSkillChanged}/>
        <SkillsList
          selectedSkill={this.props.selectedSkill}
          selectedSkillItem={this.props.selectedSkillItem}
          onSkillItemSelected={this.props.onSelectedSkillItemChanged}/>
      </div>
    );
  }
}

export default Skills;