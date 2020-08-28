import {CONTACT_ACTION_TYPE} from '../type/actionType';

const initialState = {
  isLoading: false,
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_ACTION_TYPE.SET_LOADING:
      return {
        ...state,
        isLoading: action.value,
      };
    default:
      return state;
  }
};
