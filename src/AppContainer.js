/**
 * Created by chetanv on 02/02/16.
 */

import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { CombineReducers } from 'redux-reducer2';

import App from './components/App';
import locationReducer from './reducers/locationReducer';

class AppContainer {

  constructor({
    reducer = emptyFunction.thatReturnsArgument,
    router = null,
    applyMiddleWares = null
    }) {

    this.reducer = new CombineReducers({
      location: locationReducer,
      app: reducer
    });

    this.router = router;

    this.store = createStore(this.reducer.reduce);
  }

  dispatch(action) {
    this.store.dispatch(action);
  }

  subscribe(fn) {
    this.store.subscribe(() => {
      fn(this.store.getState());
    });
  }

  RenderApp = (props) => {
    return (
      <Provider store={this.store}>
        <App {...props} router={this.router}/>
      </Provider>
    );
  };
}

export default AppContainer;