import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

<<<<<<< HEAD
// allows browser to cache store
import { persistStore, persistReducer } from 'redux-persist';

// allows use of local storage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

import { PERSIST_CONFIG } from './constants';
import shopReducer from './shop/shop.reducer';
=======
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart-dropdown.reducer';
>>>>>>> de7ef3dfdcd1e1812689c9ac1db9c7b1b01cb92e

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
<<<<<<< HEAD
  directory: directoryReducer,
  shop: shopReducer,
=======
>>>>>>> de7ef3dfdcd1e1812689c9ac1db9c7b1b01cb92e
});

const middlewares = [logger];

<<<<<<< HEAD
const store = createStore(
  persistReducer(PERSIST_CONFIG(storage), rootReducer),
  applyMiddleware(...middlewares)
);

// will send  store to localStorage
const persistor = persistStore(store);

export { store, persistor };
=======
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
>>>>>>> de7ef3dfdcd1e1812689c9ac1db9c7b1b01cb92e
