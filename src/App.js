import React, { Component } from 'react';
import Header from './components/layout/Header';
import Home from './components/layout/Home';
import Footer from './components/layout/Footer';
import Planner from './components/layout/Planner';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export class App extends Component {
  
  render() {
    return (
      <Router >
        <Header/><br/>
          <Switch>
            <Route  exact path='/' component={Home}/>
            <Route path='/planner' component={Planner}/>
          </Switch><br/>
          <Footer/>
      </Router>
    );
  }
}

export default App;