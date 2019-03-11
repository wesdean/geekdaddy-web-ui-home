import React, {Component} from 'react';
import AboutMe from "../about-me/about-me";
import './scroll-home.scss';
import Footer from "../footer/footer";
import Contact from "../contact/contact";
import Skills from "../skills/skills";
import TopNav from "../top-nav/top-nav";
import {withRouter} from "react-router-dom";

class ScrollHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAboutMe: props.selectedAboutMe,
      selectedSkill: props.selectedSkill ? props.selectedSkill : 'languages',
      selectedSkillItem: props.selectedSkillItem ? props.selectedSkillItem : null
    };
  }

  componentDidMount() {
    this.goToHash(window.location.hash);
  }

  componentDidUpdate() {
    this.goToHash(window.location.hash);
  }

  render() {
    return (
      <div className="ScrollHome">
        <TopNav/>
        <hr className="ScrollHome-spacer"/>
        <div className="ScrollHome-content">
          <AboutMe
            selectedAboutMe={this.state.selectedAboutMe}
            onSelectedChanged={this.onSelectedAboutMeChanged}
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

  onSelectedAboutMeChanged = (selectedAboutMe) => {
    if (selectedAboutMe) {
      this.props.history.push('/@#' + selectedAboutMe);
    } else {
      this.goToHash(window.location.hash);
    }
  };

  onSelectedSkillChanged = (skillName) => {
    this.setState({selectedSkill: skillName, selectedSkillItem: null});
  };

  onSelectedSkillItemChanged = (itemName) => {
    if (itemName === this.state.selectedSkillItem) {
      itemName = null;
    }
    this.setState({selectedSkillItem: itemName});
  };

  goToHash = (hash) => {
    hash = hash.substring(1).split('&');
    let id = hash[0];
    let hashProps = {};
    for (let i = 1; i < hash.length; i++) {
      let props = hash[i].split('=');
      if (typeof props[1] === 'undefined') {
        hashProps[props[0]] = true;
      } else {
        hashProps[props[0]] = props[1];
      }
    }

    switch (id) {
      case 'about-me':
      case 'skills':
      case 'my-apps':
      case 'resume':
        if (this.state.selectedAboutMe !== id) {
          this.setState({selectedAboutMe: id});
        }
        break;
      default:
        break;
    }

    switch (id) {
      case 'skills':
        if (this.scrollTo(id)) {
          return;
        }
        break;
      default:
        break;
    }

    switch (id) {
      case 'skills':
      case 'my-apps':
      case 'resume':
        id = 'about-me';
        break;
      default:
        break;
    }

    this.scrollTo(id);
  };

  scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el && el.offsetParent !== null) {
      const topNav = document.getElementById('top-nav');
      let top = el.getBoundingClientRect().top;
      if (topNav) {
        const topNavRect = topNav.getBoundingClientRect();
        top -= topNavRect.top + topNavRect.height;
      }
      console.log(top, el);
      window.scrollTo({top: top, behavior: 'smooth'});
      return true;
    }
    return false;
  };
}

export default withRouter(ScrollHome);