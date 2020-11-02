import React, { Component } from 'react';

class HomePage extends Component {

  // moves to the next page, where the from starts
    nextPage = () => {
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
