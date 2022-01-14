import { LOGIN, LOGOUT } from './actions';

export const AUTH_INITIAL_STATE = {
  logged: false,
};

export default (state = AUTH_INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        logged: true,
      };
    case LOGOUT:
      return {
        ...AUTH_INITIAL_STATE,
      };
    default:
      return state;
  }
};
