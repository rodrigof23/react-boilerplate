import authReducer, { AUTH_INITIAL_STATE } from './auth/reducers';
import productReducer, { PRODUCT_INITIAL_STATE } from './product/reducers';

export const INITIAL_STATES = {
  auth: AUTH_INITIAL_STATE,
  product: PRODUCT_INITIAL_STATE,
};

export default ({ auth, product }, action) => ({
  auth: authReducer(auth, action),
  product: productReducer(product, action),
});
