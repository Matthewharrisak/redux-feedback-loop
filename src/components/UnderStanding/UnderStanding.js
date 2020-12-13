import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';


class Understanding extends Component {



  handleChange = (event) => {
    let btnSubmit = document.getElementById("btnSubmit");
    if (event.target.value > '0' && event.target.value < '6' )
    {btnSubmit.disabled = false} 
    else {btnSubmit.disabled = true}
    this.setState({
      understanding: event.target.value
    })
 };

    nextPage = () => {
        this.props.history.push('/Supported');
    }

      backPage = () => {
        this.props.history.push('/FeelingToday');
      }

      // dispatches value to redux store
      addUnderstanding = () => {
        this.props.dispatch({
          type:'UNDERSTANDING_OBJECT', payload: this.state.understanding})      
          console.log('from addUNDERSTANDING' , this.state);
          this.nextPage();
           }

  render() {
    return (
      <>
        <div className="masterDiv">     
          <form onSubmit={this.addUnderstanding}>
             <h1>How well are you understanding the content?</h1>
             <input onChange={this.handleChange} onkeyup="EnableDisable(this)" placeholder="Answer 1 through 5" required="required" ></input>
             <button id="btnSubmit" disabled="disabled"> Next Page </button>
             <br/>
          </form>
       </div>
    <button onClick={this.backPage}> Go back? </button>
       </>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState:reduxState
  });
export default connect(putReduxStateOnProps)(Understanding);
