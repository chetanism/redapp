/**
 * Created by chetanv on 02/02/16.
 */

import ActionTypes from './LocationActionTypes';

function setPath(path) {
  return {
    type: ActionTypes.SET_APP_PATH,
    payload: {
      path
    }
  };
}

export default {
  setPath
};