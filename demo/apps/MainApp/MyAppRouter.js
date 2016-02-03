/**
 * Created by chetanv on 03/02/16.
 */

import { Router } from 'react-routing';
import React from 'react';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import MyAppLayout from './components/MyAppLayout';
import LocationActions from '../../../src/actions/LocationActions';

import UserApp from './subApps/UserApp'

const myAppRouter = new Router(on => {

  on('*', async (state, next) => {
    const component = await next();
    return <MyAppLayout>{component}</MyAppLayout>
  });

  on('/', () => {
    return <LoginPage />;
  });

  on('/home', () => {
    return <HomePage />;
  });

  on('/user/*', (state) => {
    UserApp.dispatch(LocationActions.setPath(`/${state.params[0]}`));
    return <UserApp.RenderApp />;
  });
});

export default myAppRouter;
