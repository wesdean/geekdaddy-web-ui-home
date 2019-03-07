import React, {Component} from 'react';
import ButtonNav from "../../button-nav/button-nav";
import Button from "../../button/button";
import './skills-nav.scss';

class SkillsNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSkill: props.selectedSkill,
      changeSkillHandler: props.changeSkillHandler
    };
  }

  render() {
    return (
      <ButtonNav className="SkillsNav" active={this.state.selectedSkill} onClick={this.skillChanged.bind(this)}>
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
    this.setState({selectedSkill: skillName});

    if (typeof this.state.changeSkillHandler === 'function') {
      this.state.changeSkillHandler(skillName);
    }
  }
}

export default SkillsNav;