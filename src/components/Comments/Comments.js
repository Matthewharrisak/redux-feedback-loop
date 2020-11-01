import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Comments extends Component {

  state = {
    comments: ''
  }

    nextPage = () => {
        console.log('are we clicking?');
        this.props.history.push('/ReviewFeedback');
      }

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
      <div className="Comments">
        <form onSubmit={this.addComments}>
        <h1>Any comments you want to leave?</h1>
        <input onChange={this.handleChange} type="text" placeholder="Insert text here"></input>
        <button> Next Page </button>
        <br/>
        </form>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState:reduxState
  });
export default connect(putReduxStateOnProps)(Comments);
