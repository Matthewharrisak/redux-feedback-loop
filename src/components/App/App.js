import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import FeelingToday from '../FeelingToday/FeelingToday';
import HomePage from '../HomePage/HomePage';
import Understanding from '../UnderStanding/UnderStanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import axios from 'axios';


class App extends Component {

  componentDidMount = () => {
    this.FeedbackData();
  }

  FeedbackData = () => {
    axios.get('/feedback').then((response) => {
      console.log('this is from our database!!!!' , response.data);
      this.props.dispatch({type: 'FEEDBACK_OBJECT' , payload: response.data})
    }).catch((error) => {
      console.log('error', error);
    });
  }

  render() {
    return (
      <Router>
          <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
  
        <br/>
        {/* <FeelingToday/> 
        <UnderStanding/>
        <Comments/>
        <ReviewFeedback/> */}
      </div>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/FeelingToday" component={FeelingToday}/>
      <Route exact path="/UnderStanding" component={Understanding}/>
      <Route exact path="/Supported" component={Supported}/>
      <Route exact path="/Comments" component={Comments}/>
      <Route exact path="/ReviewFeedback" component={ReviewFeedback}/>



      </Router>
    
    );
  }
}

export default connect()(App);
