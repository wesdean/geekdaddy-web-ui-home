import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoScrollHome from './components/no-scroll-home/no-scroll-home';
import ScrollHome from "./components/scroll-home/scroll-home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={NoScrollHome}/>
            <Route path="/home" component={NoScrollHome}/>
            <Route path="/@/" component={ScrollHome}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
