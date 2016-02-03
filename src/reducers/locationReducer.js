/**
 * Created by chetanv on 02/02/16.
 */

import { Reducer } from 'redux-reducer2';
import LocationActionTypes from '../actions/LocationActionTypes';

const pathReducer = new Reducer({ currentPath: '/' })
  .on(LocationActionTypes.SET_APP_PATH, (state, action) => ({ currentPath: action.payload.path }));


export default pathReducer;