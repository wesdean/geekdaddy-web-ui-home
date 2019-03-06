import React, {Component} from 'react';
import './App.scss';
import NoScrollHome from './components/no-scroll-home/no-scroll-home';

class App extends Component {
  componentDidMount() {
    this.lastScroll = 0;
    window.addEventListener('scroll', this.scrollHandler);
  }

  render() {
    return (
      <div className="App">
        <NoScrollHome/>
      </div>
    );
  }

  scrollHandler() {
    this.lastScroll = window.scrollY;
    console.log(this.lastScroll);
  }
}

export default App;
