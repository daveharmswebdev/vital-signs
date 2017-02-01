import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import VsFormReducer from './VsFormReducer';

export default combineReducers({
  auth: AuthReducer,
  vsForm: VsFormReducer
});
