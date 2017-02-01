import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  VS_UPDATE,
  VS_CREATE
} from './types';

export const vsUpdate = ({ prop, value }) => {
  return {
    type: VS_UPDATE,
    payload: { prop, value }
  };
};

export const vsCreate = ({ sp, dp, pulse }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/vitalSigns`)
      .push({ sp, dp, pulse })
      .then(() => {
        dispatch({ type: VS_CREATE });
        Actions.vitals({ type: 'reset' });
      });
  };
};
