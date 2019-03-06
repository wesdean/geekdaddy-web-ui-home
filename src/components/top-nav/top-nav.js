import React, {Component} from 'react';
import ButtonNav from "../button-nav/button-nav"
import Button from "../button/button";
import './top-nav.scss';

class TopNav extends Component {
  render() {
    return (
      <ButtonNav className="TopNav">
        <Button>Home</Button>
        <Button>About Me</Button>
        <Button>Contact</Button>
      </ButtonNav>
    );
  }
}

export default TopNav;