import React, {Component} from 'react';
import TopNav from "../top-nav/top-nav";
import logo from "../../assets/logo.svg";
import './no-scroll-home.scss';
import Footer from "../footer/footer";

class NoScrollHome extends Component {
  render() {
    return (
      <div className="NoScrollHome" id="home">
        <TopNav/>
        <div className="NoScrollHome-content">
        <img className="NoScrollHome-logo" src={logo} alt="Logo"/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default NoScrollHome;