import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class FeelingToday extends Component {

 state = {
   feeling: '',
 }// current input - handle the input and update reducer 

    nextPage = () => {
        console.log('are we clicking?');
        this.props.history.push('/UnderStanding');
        this.addFeeling();
      }

      handleChange = (event) => {
        this.setState({
          feeling: [event.target.value]
        });
      }

      addFeeling = () => {
        console.log('this is where were adding FEELING to the object wow!!' , this.handleChange);
        this.props.dispatch({
          type:'FEEDBACK_OBJECT', payload: this.state.feeling})      
          console.log('from addFeeling' , this.state);
           }
  render() {
    return (
      <div className="Feeling">
        
        <h1>How are you feeling today?</h1>
        <input onChange={this.handleChange} type="number" placeholder="Answer 1 through 5"></input>
        <button onClick={this.nextPage}> Next Page </button>
        <br/>
      </div>
    );
  }
}
const putReduxStateOnProps = (reduxState) => ({
  reduxState:reduxState
  });
export default connect(putReduxStateOnProps)(FeelingToday);
