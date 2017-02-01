import firebase from 'firebase';
import {
  VS_UPDATE
} from './types';

export const vsUpdate = ({ prop, value }) => {
  return {
    type: VS_UPDATE,
    payload: { prop, value }
  };
};

export const vsCreate = ({ sp, dp, pulse }) => {
  const { currentUser } = firebase.auth();
  console.log('uid', currentUser.uid);
  firebase.database().ref(`/users/${currentUser.uid}/vitalSigns`)
    .push({ sp, dp, pulse });
};
