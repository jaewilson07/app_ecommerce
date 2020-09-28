import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist'; // allows browser to cache store
import storage from 'redux-persist/lib/storage'; // allows use of local storage

import { PERSIST_CONFIG } from './constants';

import rootReducer from './root-reducer';
import { sagaMiddleware, rootSaga } from './root-saga';

const middlewares = [
  //  thunk
  sagaMiddleware,
];

//only use logger if in development environment
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  persistReducer(PERSIST_CONFIG(storage), rootReducer),
  applyMiddleware(...middlewares)
);

// will send  store to localStorage
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
