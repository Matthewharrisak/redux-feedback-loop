import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';


class Understanding extends Component {

  state = {
    understanding: ''
  };

  handleChange = (event) => {
    this.setState({
      understanding: [event.target.value]
    });
  }

    nextPage = () => {
        console.log('are we clicking?');
        this.props.history.push('/Supported');
        this.addUnderstanding();
      }

      addUnderstanding = () => {
        console.log('this is where were adding UNDERSTANDING to the object wow!!' , this.handleChange);
        this.props.dispatch({
          type:'FEEDBACK_OBJECT', payload: this.state.understanding})      
          console.log('from addUNDERSTANDING' , this.state);
           }

  render() {
    return (
      <div className="Understanding">
       
        <h1>How well are you understanding the content?</h1>
        <input onChange={this.handleChange} type="number" placeholder="Answer 1 through 5"></input>
        <button  onClick={this.nextPage} > Next Page </button>
        <br/>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState:reduxState
  });
export default connect(putReduxStateOnProps)(Understanding);
