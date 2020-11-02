import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';


class Comments extends Component {


  // State is set to an empty string so if there is no input value, the empty string is sent as the value
    state = {
     comments: ''
   }
  //  function to go back 1 page 
    backPage = () => {
      this.props.history.push('/Supported');
    }
    // function to move to the next page
    nextPage = () => {
        console.log('are we clicking?');
        this.props.history.push('/ReviewFeedback');
      }

      // adds value from input and dispatchs that data to the Reducer
      addComments = () => {
        this.props.dispatch({
            type:'COMMENTS_OBJECT', payload: this.state.comments})      
            console.log('from addUNDERSTANDING' , this.state);
         this.nextPage();
      }
      
      handleChange = (event) => {
            this.setState({
            comments: event.target.value
            });
      }

  render() {
    return (
      <>
      <div className="masterDiv">
        <form onSubmit={this.addComments}>
        <h1>Any comments you want to leave?</h1>
        <input onChange={this.handleChange} type="text" placeholder="Insert text here"></input>
        <button> Next Page </button>
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
export default connect(putReduxStateOnProps)(Comments);
