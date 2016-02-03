/**
 * Created by chetanv on 03/02/16.
 */


import { Router } from 'react-routing';
import React from 'react';

import ProfilePage from './components/ProfilePage';
import SettingsPage from './components/SettingsPage';
import AnotherPage from './components/AnotherPage';
import UserLayout from './components/UserLayout';

const userRouter = new Router(on => {

  on('*', async (state, next) => {
    const component = await next();
    return <UserLayout>{component}</UserLayout>
  });

  on('/', () => {
    return <ProfilePage />;
  });

  on('/settings', () => {
    return <SettingsPage />;
  });

  on('/another', () => {
    return <AnotherPage />;
  });
});

export default userRouter;
