import createSagaMidleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';

import { cartSagas } from './cart/cart.sagas';
import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.saga';

export const sagaMiddleware = createSagaMidleware();

export function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
