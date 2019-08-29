import React, { Component } from 'react';
import Header from './components/layout/Header';
import Home from './components/layout/Home';
import Footer from './components/layout/Footer';
import Planner from './components/layout/Planner';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/styles/App.css';
import './assets/styles/bootstrap.css';
export class App extends Component {
  
  render() {
    return (
      <Router >
        <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/planner' component={Planner}/>
          </Switch>
          <Footer/>
      </Router>
    );
  }
}

export default App;