import React, {Component} from 'react';
import './App.scss';
import NoScrollHome from './components/no-scroll-home/no-scroll-home';
import ScrollHome from "./components/scroll-home/scroll-home";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollPosition: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  }

  render() {
    return (
      <div className="App">
        {this.state.scrollPosition > 0 ?
          <ScrollHome/>
          :
          <NoScrollHome/>
        }
      </div>
    );
  }

  scrollHandler = () => {
    this.setState({scrollPosition: window.scrollY});
  }
}

export default App;
