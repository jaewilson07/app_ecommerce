import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// allows browser to cache store
import { persistStore, persistReducer } from 'redux-persist';

// allows use of local storage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

import { PERSIST_CONFIG } from './constants';
import shopReducer from './shop/shop.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

//only use logger if in development environment
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  persistReducer(PERSIST_CONFIG(storage), rootReducer),
  applyMiddleware(...middlewares)
);

// will send  store to localStorage
const persistor = persistStore(store);

export { store, persistor };
