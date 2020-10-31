import React, { Component } from 'react';
// import axios from 'axios';

class Comments extends Component {

    nextPage = () => {
        console.log('are we clicking?');
        this.props.history.push('/ReviewFeedback');
      }

  render() {
    return (
      <div className="Comments">
      
        <h1>Any comments you want to leave?</h1>
        <input type="text" placeholder="Insert text here"></input>
        <button onClick={this.nextPage}> Next Page </button>
        <br/>
      </div>
    );
  }
}

export default Comments;
