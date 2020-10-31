import React, { Component } from 'react';
// import axios from 'axios';

class Comments extends Component {
  render() {
    return (
      <div className="Comments">
      
        <h1>Any comments you want to leave?</h1>
        <input type="text" value="feedback"></input>
        <button> Next Page </button>
        <br/>
      </div>
    );
  }
}

export default Comments;
