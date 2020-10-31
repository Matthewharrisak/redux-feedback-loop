import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import FeelingToday from '../FeelingToday/FeelingToday';
import HomePage from '../HomePage/HomePage';
import Understanding from '../UnderStanding/UnderStanding';
import UnderStanding from '../UnderStanding/UnderStanding'
import Supported from '../Supported/Supported'
import Comments from '../Comments/Comments'
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback'

class App extends Component {

  

  render() {
    return (
      <Router>
          <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
  
        <br/>
        <FeelingToday/> 
        <UnderStanding/>
        <Comments/>
        <ReviewFeedback/>
      </div>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/feelingToday" component={FeelingToday}/>
      </Router>
    
    );
  }
}

export default App;
