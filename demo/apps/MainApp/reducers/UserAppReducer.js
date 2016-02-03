/**
 * Created by chetanv on 03/02/16.
 */

import { Reducer } from 'redux-reducer2';
import AppActionTypes from '../actions/AppActionTypes';

const UserAppReducer = new Reducer({})
  .on(AppActionTypes.USER_APP_STATE_CHANGED, (state, action) => {
    console.log('user app state changed: ' + JSON.stringify(action));
    return action.payload.state
  });

export default UserAppReducer;