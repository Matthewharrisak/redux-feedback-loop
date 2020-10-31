import React, { Component } from 'react';
// import axios from 'axios';

class Understanding extends Component {
  render() {
    return (
      <div className="Understanding">
       
        <h1>How well are you understanding the content?</h1>
        <input type="integer" value="feedback"></input>
        <button> Next Page </button>
        <br/>
      </div>
    );
  }
}

export default Understanding;
