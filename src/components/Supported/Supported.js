import React, { Component } from 'react';
// import axios from 'axios';

class Supported extends Component {

    nextPage = () => {
        console.log('are we clicking?');
        this.props.history.push('/Comments');
      }

  render() {
    return (
      <div className="Supported">
     
          <h1>How well are you being supported?</h1>
        <input type="integer" placeholder="Please Answer with 1-5"></input>
        <button onClick={this.nextPage} > Next Page </button>
        <br/>
      </div>
    );
  }
}

export default Supported;
