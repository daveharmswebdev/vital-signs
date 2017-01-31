import {
  VS_UPDATE
} from './types';

export const vsUpdate = ({ prop, value }) => {
  return {
    type: VS_UPDATE,
    payload: { prop, value }
  };
};
