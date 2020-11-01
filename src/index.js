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
    switch (action.type) {
        
        case 'FEEDBACK_OBJECT':
            console.log('whats up from the reducer', action.payload );
            
         return [state, ...action.payload];
        default: return state;
            
    }
}




const storeInstance = createStore(
     combineReducers({
        getFeedbackObject,
        }),
    applyMiddleware(logger)

);

ReactDOM.render(<Provider store={storeInstance}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
