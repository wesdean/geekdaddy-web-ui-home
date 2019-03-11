import React, {Component} from 'react';
import TopNav from "../top-nav/top-nav";
import logo from "../../assets/logo.svg";
import './no-scroll-home.scss';
import Footer from "../footer/footer";
import {Redirect} from 'react-router-dom';

class NoScrollHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0
    }
  }

  componentDidMount() {
    window.scrollY = 0;
    window.addEventListener('scroll', this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  render() {
    const classNames = ['NoScrollHome'];
    if (this.state.scrollY > 0) {
      return <Redirect to="/@"/>;
    }

    return (
      <div className={classNames.join(' ')} id="home">
        <TopNav/>
        <div className="NoScrollHome-content" style={{backgroundImage: `url(${logo})`}}>{'\u00A0'}</div>
        <Footer/>
      </div>
    );
  }

  scrollHandler = () => {
    this.setState({scrollY: window.scrollY});
  };
}

export default NoScrollHome;