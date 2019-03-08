import React, {Component} from 'react';
import ButtonNav from "../../button-nav/button-nav";
import Button from "../../button/button";
import './skills-nav.scss';

class SkillsNav extends Component {
  render() {
    return (
      <ButtonNav className="SkillsNav" active={this.props.selectedSkill} onClick={this.skillChanged}>
        <Button name="languages">Languages</Button>
        <Button name="frameworks">Frameworks</Button>
        <Button name="libraries">Libraries/APIs</Button>
        <Button name="paradigms">Paradigms</Button>
        <Button name="platforms">Platforms</Button>
        <Button name="tools">Tools</Button>
      </ButtonNav>
    );
  }

  skillChanged = (skillName) => {
    if (typeof this.props.changeSkillHandler === 'function') {
      this.props.changeSkillHandler(skillName);
    }
  }
}

export default SkillsNav;