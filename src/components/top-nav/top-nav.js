import React, {Component} from 'react';
import ButtonNav from "../button-nav/button-nav"
import Button from "../button/button";
import './top-nav.scss';
import {withRouter} from "react-router-dom";

class TopNav extends Component {
  render() {
    return (
      <ButtonNav className="TopNav" id="top-nav">
        <Button onClick={this.clickHandler.bind(this, '/home')}>Home</Button>
        <Button onClick={this.clickHandler.bind(this, '/@#about-me')}>About Me</Button>
        <Button onClick={this.clickHandler.bind(this, 'https://gddprojects.blogspot.com')}>Blog</Button>
        <Button onClick={this.clickHandler.bind(this, '/@#contact')}>Contact</Button>
      </ButtonNav>
    );
  }

  clickHandler = (path) => {
    if (path.match(/^http/)) {
      window.open(path, 'blog');
    } else {
      this.props.history.push(path);
    }
  }
}

export default withRouter(TopNav);