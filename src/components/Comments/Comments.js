import React, { Component } from 'react';
// import axios from 'axios';

class Comments extends Component {
  render() {
    return (
      <div className="Comments">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <h1>Any comments you want to leave?</h1>
        <input type="text" value="feedback"></input>
        <button> Next Page </button>
        <br/>
      </div>
    );
  }
}

export default Comments;
