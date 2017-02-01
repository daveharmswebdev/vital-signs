import { 
  VS_UPDATE,
  VS_CREATE 
} from '../actions/types';

const INITIAL_STATE = {
  sp: '',
  bp: '',
  pulse: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VS_UPDATE:
      return { 
        ...state, 
        [action.payload.prop]: action.payload.value 
      };
    case VS_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
