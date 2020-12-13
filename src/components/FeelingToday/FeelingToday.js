import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class FeelingToday extends Component {

  
    state = {
      feeling: 0,
    }

      backPage = () => {
        this.props.history.push('/');
      }

      handleChange = (event) => {
        let btnSubmit = document.getElementById("btnSubmit");
        if (event.target.value > '0' && event.target.value < '6' )
        {btnSubmit.disabled = false} 
        else {btnSubmit.disabled = true}
        this.setState({
          feeling: event.target.value
        })
     };
       
        nextPage = () => {
 
            this.props.history.push('/UnderStanding');
            this.addFeeling();
            
          }

      addFeeling = () => {
         this.props.dispatch({
          type:'FEELING_OBJECT', payload: this.state.feeling})      
          console.log('from addFeeling' , this.state);
           }

  render() {
    return (
      <>

<div className="masterDiv">
        <form onSubmit={this.nextPage}>
        <h1>How are you feeling today?</h1>
        <input onChange={this.handleChange} onkeyup="EnableDisable(this)" placeholder="Answer 1 through 5" required="required" ></input>
        <button id="btnSubmit" disabled="disabled"> Next Page </button>
        </form>
        <br/>
     </div>
     <button onClick={this.backPage}> Go back? </button>
     </>
    );
  }
}
const putReduxStateOnProps = (reduxState) => ({
  reduxState:reduxState
  });
export default connect(putReduxStateOnProps)(FeelingToday);
