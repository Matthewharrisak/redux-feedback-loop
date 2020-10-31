import React, { Component } from 'react';
// import axios from 'axios';

class FeelingToday extends Component {
  render() {
    return (
      <div className="Feeling">
        
        <h1>How are you feeling today?</h1>
        <input type="integer" value="feedback"></input>
        <button> Next Page </button>
        <br/>
      </div>
    );
  }
}

export default FeelingToday;
