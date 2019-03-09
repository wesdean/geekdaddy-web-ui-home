import React, {Component} from 'react';
import AboutMe from "../about-me/about-me";
import './scroll-home.scss';
import Footer from "../footer/footer";
import Contact from "../contact/contact";
import Skills from "../skills/skills";

class ScrollHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSkill: props.selectedSkill ? props.selectedSkill : 'languages',
      selectedSkillItem: props.selectedSkillItem ? props.selectedSkillItem : null
    };
  }


  render() {
    return (
      <div className="ScrollHome">
        <hr className="ScrollHome-spacer"/>
        <div className="ScrollHome-content">
          <AboutMe
            selectedSkill={this.state.selectedSkill}
            selectedSkillItem={this.state.selectedSkillItem}
            onSelectedSkillChanged={this.onSelectedSkillChanged}
            onSelectedSkillItemChanged={this.onSelectedSkillItemChanged}/>
          <hr className="ScrollHome-spacer"/>
          <Skills
            selectedSkill={this.state.selectedSkill}
            selectedSkillItem={this.state.selectedSkillItem}
            onSelectedSkillChanged={this.onSelectedSkillChanged}
            onSelectedSkillItemChanged={this.onSelectedSkillItemChanged}/>
          <hr className="ScrollHome-spacer ScrollHome-skills-spacer"/>
          <Contact/>
        </div>
        <hr className="ScrollHome-spacer"/>
        <Footer/>
      </div>
    );
  }

  onSelectedSkillChanged = (skillName) => {
    this.setState({selectedSkill: skillName, selectedSkillItem: null});
  };

  onSelectedSkillItemChanged = (itemName) => {
    if (itemName === this.state.selectedSkillItem) {
      itemName = null;
    }
    this.setState({selectedSkillItem: itemName});
  }
}

export default ScrollHome;