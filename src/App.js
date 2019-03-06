import React, {Component} from 'react';
import './App.scss';
import TopNav from './components/top-nav/top-nav';
import logo from './assets/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav/>
        <img src={logo} alt="Logo"/>
      </div>
    );
  }
}

export default App;
