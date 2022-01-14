import { LIST_PRODUCTS } from './actions';

export const PRODUCT_INITIAL_STATE = {
  list: null,
};

export default (state = PRODUCT_INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_PRODUCTS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
