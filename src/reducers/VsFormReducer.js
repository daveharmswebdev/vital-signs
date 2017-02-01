import { 
  VS_UPDATE 
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
    default:
      return state;
  }
};
