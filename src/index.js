import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import App from './App';
import {Provider} from "react-redux";
// import userReducer from './redux/reducers/userReducer';
import rootReducer from './redux/rootReducers';
import thunk from "redux-thunk";
//thunk ka use kia async kaam krne ke liye firebase me resume data store krne ke liye 
//jb jyda components ho toh asynckaam ko krne ke liye better hai thunk

let mystore=createStore(rootReducer,applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={mystore}>
    <App />
 
  </Provider>,
    document.getElementById('root')
   
);


