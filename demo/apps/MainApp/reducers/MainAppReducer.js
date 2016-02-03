/**
 * Created by chetanv on 03/02/16.
 */

import { CombineReducers } from 'redux-reducer2';
import UserAppReducer from './UserAppReducer';

const MainAppReducer = new CombineReducers({
  userApp: UserAppReducer
});

export default MainAppReducer;