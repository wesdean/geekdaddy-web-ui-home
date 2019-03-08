import React, {Component} from 'react';
import ButtonNav from "../button-nav/button-nav"
import Button from "../button/button";
import './top-nav.scss';

class TopNav extends Component {
  render() {
    return (
      <ButtonNav className="TopNav">
        <Button onClick={this.clickHandler.bind(this, 'home')}>Home</Button>
        <Button onClick={this.clickHandler.bind(this, 'about-me')}>About Me</Button>
        <Button onClick={this.clickHandler.bind(this, 'contact')}>Contact</Button>
      </ButtonNav>
    );
  }

  clickHandler = (id) => {
    const el = document.getElementById(id);
    console.log(el);
    el.scrollIntoView(true);
  }
}

export default TopNav;