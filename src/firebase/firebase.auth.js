import firebase from 'firebase/app';
import 'firebase/auth';

import { db } from './firebase.utils';

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = async (event) => {
  event.preventDefault();

  try {
    const userAuth = await auth.signInWithPopup(googleProvider);
    return userAuth;
  } catch (err) {
    console.log(err);
  }
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);
  let snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  } else {
    console.log(`${userAuth.displayName} already exists!`);
  }

  return userRef;
};

export const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
