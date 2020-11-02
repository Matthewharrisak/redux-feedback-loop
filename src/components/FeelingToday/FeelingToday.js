import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class FeelingToday extends Component {

//  state = {
//    feeling: '',
//  }// current input - handle the input and update reducer 

    nextPage = () => {
        this.props.history.push('/UnderStanding');
        // this.addFeeling();
        this.addFeeling();
      }

      handleChange = (event) => {
        this.setState({
          feeling: event.target.value
        });
      }

      addFeeling = () => {
        // console.log('this is where were adding FEELING to the object wow!!' , this.handleChange);
        this.props.dispatch({
          type:'FEELING_OBJECT', payload: this.state.feeling})      
          console.log('from addFeeling' , this.state);
          // this.nextPage();
           }

  render() {
    return (
<div className="masterDiv">
        <form onSubmit={this.nextPage}>
        <h1>How are you feeling today?</h1>
        <input onChange={this.handleChange} type="number" placeholder="Answer 1 through 5" required="required"></input>
        <button> Next Page </button>
        </form>
        <br/>
     </div>
    );
  }
}
const putReduxStateOnProps = (reduxState) => ({
  reduxState:reduxState
  });
export default connect(putReduxStateOnProps)(FeelingToday);
