/**
 * Created by chetanv on 03/02/16.
 */

import UserApp from '../../UserApp/UserApp';
import AppActionTypes from '../actions/AppActionTypes';
import MainApp from '../MainApp';

UserApp.subscribe((state) => {
  MainApp.dispatch({
    type: AppActionTypes.USER_APP_STATE_CHANGED,
    payload: {
      state
    }
  });
});

export default UserApp;