import React, {Component} from 'react';
import './about-me.scss';
import ButtonNav from "../button-nav/button-nav";
import Button from "../button/button";
import {faFacebook, faGithub, faLinkedin, faStackExchange} from '@fortawesome/free-brands-svg-icons'
import SocialNetworkLink from "./social-network-link";
import SkillsNav from "../skills/skills-nav/skills-nav";
import SkillsList from "../skills/skills-list/skills-list";
import MyApps from "./my-apps/my-apps";
import aboutMeContent from '../../data/about-me';

class AboutMe extends Component {
  render() {
    let content, label, altContent, altLabel;
    switch (this.props.selectedAboutMe) {
      case 'skills':
        label = 'Skills';
        content = <SkillsList
          selectedSkill={this.props.selectedSkill}
          selectedSkillItem={this.props.selectedSkillItem}
          onSkillItemSelected={this.props.onSelectedSkillItemChanged}/>;
        break;
      case 'my-apps':
        label = 'My Apps';
        content = <MyApps/>;
        break;
      default:
        label = 'About Me';
        content = aboutMeContent;
        break;
    }

    switch (this.props.selectedAboutMe) {
      case 'skills':
        altLabel = 'About Me';
        altContent = aboutMeContent;
        break;
      default:
        altLabel = label;
        altContent = content;
        break;
    }

    return (
      <div className="AboutMe" id="about-me">
        <div className="AboutMe-main">
          <div className="AboutMe-section-label">{label}</div>
          <div className="AboutMe-content">{content}</div>
        </div>
        <div className="AboutMe-alt">
          <div className="AboutMe-section-label">{altLabel}</div>
          <div className="AboutMe-content">{altContent}</div>
        </div>
        {(() => {
          if (this.props.selectedAboutMe === 'skills') {
            return <SkillsNav selectedSkill={this.props.selectedSkill}
                              changeSkillHandler={this.props.onSelectedSkillChanged}/>
          }
        })()}
        <ButtonNav className="AboutMe-nav" active={this.props.selectedAboutMe} onClick={this.buttonNavHandler}
                   toggle={true}>
          <Button name="skills" className="AboutMe-skills-button">Skills</Button>
          <Button name="my-apps">My Apps</Button>
          <Button name="resume">Resumé</Button>
        </ButtonNav>
        <div className="AboutMe-social-networks">
          <SocialNetworkLink href="https://www.linkedin.com/in/wes-dean" icon={faLinkedin}/>
          <SocialNetworkLink href="https://www.facebook.com/geekdaddydean" icon={faFacebook}/>
          <SocialNetworkLink href="https://github.com/wesdean" icon={faGithub}/>
          <SocialNetworkLink href="https://stackexchange.com/users/7195610/wes-dean" icon={faStackExchange}/>
        </div>
      </div>
    );
  }

  buttonNavHandler = (buttonName) => {
    if (typeof this.props.onSelectedChanged === 'function') {
      this.props.onSelectedChanged(buttonName);
    }
  };
}

export default AboutMe;