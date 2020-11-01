import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Comments extends Component {

  state = {
    comments: '',
  }

    nextPage = () => {
        console.log('are we clicking?');
        this.props.history.push('/ReviewFeedback');
        this.addComments();
      }

      addComments = () => {
        console.log('this is where were adding COMMENTS to the object wow!!' , this.handleChange);
        this.props.dispatch({
          type:'FEEDBACK_OBJECT', payload: this.state.comments})      
          console.log('from addUNDERSTANDING' , this.state);
           }
           handleChange = (event) => {
            this.setState({
              comments: [event.target.value]
            });
          }

  render() {
    return (
      <div className="Comments">
      
        <h1>Any comments you want to leave?</h1>
        <input onChange={this.handleChange} type="text" placeholder="Insert text here"></input>
        <button onClick={this.nextPage}> Next Page </button>
        <br/>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState:reduxState
  });
export default connect(putReduxStateOnProps)(Comments);
