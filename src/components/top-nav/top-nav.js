import React, {Component} from 'react';
import ButtonNav from "../button-nav/button-nav"
import Button from "../button/button";
import './top-nav.scss';

class TopNav extends Component {
  render() {
    return (
      <ButtonNav className="TopNav">
        <Button onClick={this.homeClickHandler}>Home</Button>
        <Button>About Me</Button>
        <Button>Contact</Button>
      </ButtonNav>
    );
  }

  homeClickHandler = () => {
    window.location.hash = '';
    window.location.hash = '#home';
  }
}

export default TopNav;