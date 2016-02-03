/**
 * Created by chetanv on 02/02/16.
 */

import React, { Component, PropTypes } from 'react';

import AppContainer from '../../../src/AppContainer';
import router from './myAppRouter';
import reducer from './reducers/MainAppReducer';


const mainApp = new AppContainer({
  router,
  reducer
});


export default mainApp;