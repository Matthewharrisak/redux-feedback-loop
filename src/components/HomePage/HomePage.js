import React, { Component } from 'react';
// import axios from 'axios';

class HomePage extends Component {

    nextPage = () => {
        console.log('are we clicking?');
        this.props.history.push('/FeelingToday');
      }

      

  render() {
    return (
      
     
    <>
     <div className="masterDiv">
        <h1> How did today go? </h1>

        <button onClick={this.nextPage}> Submit feedback </button>
        <br/>
      </div>

      </>
    );
  }
}

export default HomePage;
