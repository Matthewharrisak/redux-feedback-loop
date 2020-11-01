import axios from 'axios';
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';


class ReviewFeedback extends Component {

  nextPage = () => {
    this.props.history.push('/SubmissionFin');
    // this.addFeeling();
  }

  postFeedback = () => {
    // event.preventDefault();
    console.log('adding feedback!!', this.props.reduxState.getFeedbackObject);
    axios.post('/feedback', this.props.reduxState.getFeedbackObject).then((response) => {
      console.log(response.data);
      }).catch((error) => {
      console.log(error);
     })
     this.nextPage();
    }

  render() {
    return (
      <div className="Supported">
       
        <h1>Review Your Feedback</h1>
        <h3> Feeling: {this.props.reduxState.getFeedbackObject.feeling} </h3>
        <h3>  Understanding:{this.props.reduxState.getFeedbackObject.understanding} </h3>
        <h3> Support:{this.props.reduxState.getFeedbackObject.support} </h3>
        <h3> Comments: {this.props.reduxState.getFeedbackObject. comments}</h3>
         <button onClick={this.postFeedback}> Submit  </button>
        <br/>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState:reduxState
  });
export default connect(putReduxStateOnProps)(ReviewFeedback);
