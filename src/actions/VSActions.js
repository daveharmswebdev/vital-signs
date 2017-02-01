import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  VS_UPDATE,
  VS_CREATE,
  VS_FETCH_SUCCESS
} from './types';

export const vsUpdate = ({ prop, value }) => {
  return {
    type: VS_UPDATE,
    payload: { prop, value }
  };
};

export const vsCreate = ({ sp, dp, pulse }) => {
  const { currentUser: { uid } } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${uid}/vitalSigns`)
      .push({ sp, dp, pulse })
      .then(() => {
        dispatch({ type: VS_CREATE });
        Actions.vitalsList({ type: 'reset' });
      });
  };
};

export const vsFetch = () => {
  const { currentUser: { uid } } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${uid}/vitalSigns`)
      .on('value', snapshot => {
        dispatch({
          type: VS_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};
