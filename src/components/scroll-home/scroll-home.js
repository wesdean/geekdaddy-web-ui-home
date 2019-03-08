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
      selectedSkill: props.selectedSkill ? props.selectedSkill : 'languages'
    };
  }


  render() {
    return (
      <div className="ScrollHome">
        <hr className="ScrollHome-spacer"/>
        <div className="ScrollHome-content">
          <AboutMe selectedSkill={this.state.selectedSkill} onSelectedSkillChanged={this.onSelectedSkillChanged}/>
          <hr className="ScrollHome-spacer"/>
          <Skills selectedSkill={this.state.selectedSkill} onSelectedSkillChanged={this.onSelectedSkillChanged}/>
          <hr className="ScrollHome-spacer ScrollHome-skills-spacer"/>
          <Contact/>
        </div>
        <hr className="ScrollHome-spacer"/>
        <Footer/>
      </div>
    );
  }

  onSelectedSkillChanged = (skillName) => {
    this.setState({selectedSkill: skillName});
  }
}

export default ScrollHome;