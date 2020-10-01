import { takeLatest, all, call, put } from 'redux-saga/effects';

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from './user.actions';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase.auth';

import { USER } from '../constants';
import { clearCart } from '../cart/cart.action';

// --- user authentication --- ///
function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );

    const userSnapshot = yield userRef.get();

    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

function* signinWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

function* onEmailSigninStart() {
  yield takeLatest(USER.EMAIL_SIGNIN_START, signInWithEmail);
}

function* onGoogleSigninStart() {
  yield takeLatest(USER.GOOGLE_SIGNIN_START, signinWithGoogle);
}

// -- check user session -- //
function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

function* onCheckUserSession() {
  yield takeLatest(USER.CHECK_USER_SESSION, isUserAuthenticated);
}

// -- sign out -- //
function* userSignOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
    yield put(clearCart());
  } catch (err) {
    yield put(signOutFailure(err.message));
  }
}

function* onUserSignOut() {
  yield takeLatest(USER.SIGNOUT_START, userSignOut);
}

//-- sign up a new user-- //
function* signUp({ payload: { password, email, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (err) {
    yield put(signUpFailure(err.message));
  }
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {
  try {
    yield getSnapshotFromUserAuth(user, additionalData);
  } catch (err) {
    yield put(signUpFailure(err.message));
  }
}

function* onSignUpStart() {
  yield takeLatest(USER.SIGNUP_START, signUp);
}

function* onSignUpSuccess() {
  yield takeLatest(USER.SIGNUP_SUCCESS, signInAfterSignUp);
}

// -- combine all sagas --- //
export function* userSagas() {
  yield all([
    call(onGoogleSigninStart),
    call(onEmailSigninStart),
    call(onCheckUserSession),
    call(onUserSignOut),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
