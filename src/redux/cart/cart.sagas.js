import { all, call, put } from 'redux-saga/effects';

import { USER } from '../constants';
import { clearCart } from './cart.action';

function* clearCartOnSignOut() {
  try {
    yield put(clearCart());
  } catch (err) {}
}

function* onSignOutSuccess() {
  yield clearCart(USER.SIGNOUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
