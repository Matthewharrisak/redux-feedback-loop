import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from'redux';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';




const getFeedbackObject = (state = {}, action) => {
    if(action.type === 'FEELING_OBJECT'){
        return {
            ...state,
            feeling: action.payload
         }
   }
   else if(action.type === 'UNDERSTANDING_OBJECT'){
    return {
        ...state,
        understanding: action.payload
        }  
    }
    else if(action.type === 'SUPPORTED_OBJECT'){
        return {
            ...state,
            supported: action.payload
            }  
        }
        else if(action.type === 'COMMENTS_OBJECT'){
            return {
                ...state,
                comments: action.payload
                }  
            }
            return state;
}



const storeInstance = createStore(
     combineReducers({
        getFeedbackObject,
        }),
    applyMiddleware(logger)

);

ReactDOM.render(<Provider store={storeInstance}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
