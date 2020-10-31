import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Understanding from '../UnderStanding/UnderStanding';
// import FeelingToday from '../FeelingToday/FeelingToday'
// import UnderStanding from '../UnderStanding/UnderStanding'
import Supported from '../Supported/Supported'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        {/* <FeelingToday/> */}
        {/* <UnderStanding/> */}
        {/* <Supported/> */}
      </div>
    );
  }
}

export default App;
