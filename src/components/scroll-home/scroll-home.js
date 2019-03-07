import React, {Component} from 'react';
import AboutMe from "../about-me/about-me";
import './scroll-home.scss';
import Footer from "../footer/footer";

class ScrollHome extends Component {
  render() {
    return (
      <div className="ScrollHome">
        <hr className="ScrollHome-spacer"/>
        <AboutMe/>
        <hr className="ScrollHome-spacer"/>
        <Footer/>
      </div>
    );
  }
}

export default ScrollHome;