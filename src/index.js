//-----------------------------------------------------------------------------
// src/index.js
//-----------------------------------------------------------------------------
import React                  from 'react'
import ReactDOM               from 'react-dom'
import { Provider }           from 'react-redux'
import { createStore }        from 'redux'
import './index.css'
import Board                  from './containers/Board'
import reducer                from './reducers'
import registerServiceWorker  from './registerServiceWorker';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,                    // Loads initialState
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

ReactDOM.render(
  <Provider store={store}>
    <Board />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
