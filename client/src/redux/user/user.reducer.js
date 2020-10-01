import { USER } from '../constants';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case USER.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };

    case USER.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    case USER.SIGNIN_FAILURE:
    case USER.SIGNOUT_FAILURE:
    case USER.SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
