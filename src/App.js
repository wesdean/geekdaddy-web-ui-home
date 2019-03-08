import React, {Component} from 'react';
import './App.scss';
import NoScrollHome from './components/no-scroll-home/no-scroll-home';
import ScrollHome from "./components/scroll-home/scroll-home";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  }

  render() {
    return (
      <div className="App">
        <NoScrollHome/>
        <ScrollHome/>
      </div>
    );
  }

  scrollHandler = () => {
    this.setState({scrollY: window.scrollY});
  }
}

export default App;
