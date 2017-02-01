import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import VsFormReducer from './VsFormReducer';
import VsListReducer from './VsListReducer';

export default combineReducers({
  auth: AuthReducer,
  vsForm: VsFormReducer,
  vsList: VsListReducer
});
