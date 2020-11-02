import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux'; // connects this component to the Redux store


class ReviewFeedback extends Component {

  nextPage = () => {
    this.props.history.push('/SubmissionFin'); // Route to the next page, connected to button with onClick
  }

  backPage = () => {
    this.props.history.push('/Comments');   // route to previous page - allows user to go back and change their answers
  }

  // axios POST request, sends feedback object to Database
  postFeedback = () => {
    console.log('adding feedback!!', this.props.reduxState.getFeedbackObject); // logs the reduxState thats about to be set the DB
    axios.post('/feedback', this.props.reduxState.getFeedbackObject).then((response) => {
      console.log(response.data);
      }).catch((error) => {
      console.log(error);
     })
     this.nextPage();  
    }

  render() {
    return  (
 <>
       <div className="masterDiv">

          <h1>Review Your Feedback</h1>
          <h3> Feeling: {this.props.reduxState.getFeedbackObject.feeling} </h3>
          <h3>  Understanding:{this.props.reduxState.getFeedbackObject.understanding} </h3>
          <h3> Support:{this.props.reduxState.getFeedbackObject.support} </h3>
          <h3> Comments: {this.props.reduxState.getFeedbackObject. comments}</h3>
                     <button onClick={this.postFeedback}>Submit</button>
   <br/>
      </div>
      <button onClick={this.backPage}> Need to change your answer? </button>

</>
          );
        }
}

//connects component to redux store 
const putReduxStateOnProps = (reduxState) => ({
  reduxState:reduxState
  });
export default connect(putReduxStateOnProps)(ReviewFeedback);
