import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {

  

    nextPage = () => {
        console.log('are we clicking?');
        this.props.history.push('/Comments');
      }

      backPage = () => {
        this.props.history.push('/UnderStanding');
      }

      handleChange = (event) => {
        let btnSubmit = document.getElementById("btnSubmit");
        if (event.target.value > '0' && event.target.value < '6' )
        {btnSubmit.disabled = false} 
        else {btnSubmit.disabled = true}
        this.setState({
          supported: event.target.value
        })
     };

      // dispatchs value to redux store
      addSupported = () => {
        this.props.dispatch({
          type:'SUPPORTED_OBJECT', payload: this.state.supported})      
          console.log('from addSUPPOERTED' , this.state);
          this.nextPage();
           }

  render() {
    return (
      <>
          <div className="masterDiv">
              <form onSubmit={this.addSupported}>
                  <h1>How well are you being supported?</h1>
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
export default connect(putReduxStateOnProps)(Supported);
