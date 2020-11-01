import React, { Component } from 'react';
// import axios from 'axios';

class SubmissionFin extends Component {

    nextPage = () => {
        console.log('are we clicking?');
        this.props.history.push('/');
      }

      

  render() {
    return (
      <div className="Feeling">
     
    
        
        <h1> Submission sucessful! Thank you!  </h1>

        <button onClick={this.nextPage}> return home </button>
        <br/>
      </div>
    );
  }
}

export default SubmissionFin;