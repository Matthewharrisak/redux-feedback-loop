import React, { Component } from 'react';
// import axios from 'axios';

class Understanding extends Component {

    nextPage = () => {
        console.log('are we clicking?');
        this.props.history.push('/Supported');
      }


  render() {
    return (
      <div className="Understanding">
       
        <h1>How well are you understanding the content?</h1>
        <input type="integer" ></input>
        <button  onClick={this.nextPage} > Next Page </button>
        <br/>
      </div>
    );
  }
}

export default Understanding;
