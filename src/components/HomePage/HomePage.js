import React, { Component } from 'react';
// import axios from 'axios';

class HomePage extends Component {

    nextPage = () => {
        console.log('are we clicking?');
        this.props.history.push('/feelingToday');
      }

  render() {
    return (
      <div className="Feeling">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        
        <h1> How did today go? </h1>
        <button onClick={this.nextPage}> Submit feedback </button>
        <br/>
      </div>
    );
  }
}

export default HomePage;
