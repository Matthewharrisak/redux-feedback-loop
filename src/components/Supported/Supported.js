import React, { Component } from 'react';
// import axios from 'axios';

class Supported extends Component {
  render() {
    return (
      <div className="Supported">
     
          <h1>How well are you being supported?</h1>
        <input type="integer" value="feedback"></input>
        <button> Next Page </button>
        <br/>
      </div>
    );
  }
}

export default Supported;
