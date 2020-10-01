import { USER } from '../constants';

export const checkUserSession = () => ({
  type: USER.CHECK_USER_SESSION,
});

export const googleSignInStart = () => ({
  type: USER.GOOGLE_SIGNIN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: USER.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: USER.SIGNIN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: USER.SIGNIN_FAILURE,
  payload: error,
});

export const signOutStart = () => ({
  type: USER.SIGNOUT_START,
});

export const signOutSuccess = () => ({
  type: USER.SIGNOUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: USER.SIGNOUT_FAILURE,
  payload: error,
});

export const signUpStart = (accountCredentials) => ({
  type: USER.SIGNUP_START,
  payload: accountCredentials,
});

export const signUpSuccess = (user) => ({
  type: USER.SIGNUP_SUCCESS,
  payload: user,
});

export const signUpFailure = (error) => ({
  type: USER.SIGNUP_FAILURE,
  payload: error,
});
