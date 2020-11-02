import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Supported extends Component {

  

    nextPage = () => {
        console.log('are we clicking?');
        this.props.history.push('/Comments');
      }

      handleChange = (event) => {
        this.setState({
          supported: event.target.value
        });
      }

      addSupported = () => {
        // console.log('this is where were adding SUPPORTED to the object wow!!' , this.handleChange);
        this.props.dispatch({
          type:'SUPPORTED_OBJECT', payload: this.state.supported})      
          console.log('from addUNDERSTANDING' , this.state);
          this.nextPage();
           }

  render() {
    return (
<div className="masterDiv">
            <form onSubmit={this.addSupported}>
          <h1>How well are you being supported?</h1>
        <input onChange={this.handleChange} type="integer" placeholder="Please Answer with 1-5" required="required"></input>
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
export default connect(putReduxStateOnProps)(Supported);
