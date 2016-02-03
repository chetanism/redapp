/**
 * Created by chetanv on 02/02/16.
 */

import React, { Component, PropTypes } from 'react';

import AppContainer from '../../../src/AppContainer';
import router from './UserRouter';

const userAppContainer = new AppContainer({
  router
});

export default userAppContainer;