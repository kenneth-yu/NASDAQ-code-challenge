import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import reducer from './redux/Reducers'
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux'
import { BrowserRouter } from 'react-router-dom'
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <App/ >
    </Provider>
  </BrowserRouter>
), document.getElementById('root'));
