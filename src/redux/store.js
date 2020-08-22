import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart-dropdown.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
