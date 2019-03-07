import React, {Component} from 'react';
import AboutMe from "../about-me/about-me";
import './scroll-home.scss';
import Footer from "../footer/footer";
import Contact from "../contact/contact";
import Skills from "../skills/skills";

class ScrollHome extends Component {
  render() {
    const selectedSkill = this.props.selectedSkill ? this.props.selectedSkill : 'languages';

    return (
      <div className="ScrollHome">
        <hr className="ScrollHome-spacer"/>
        <div className="ScrollHome-content">
          <AboutMe/>
          <hr className="ScrollHome-spacer"/>
          <Skills selectedSkill={selectedSkill}/>
          <hr className="ScrollHome-spacer ScrollHome-skills-spacer"/>
          <Contact/>
        </div>
        <hr className="ScrollHome-spacer"/>
        <Footer/>
      </div>
    );
  }
}

export default ScrollHome;