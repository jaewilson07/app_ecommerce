import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDK1RjfOdv4u_lpfYjkre-YTRZxeaB2L2o',
  authDomain: 'crowndb-7b394.firebaseapp.com',
  databaseURL: 'https://crowndb-7b394.firebaseio.com',
  projectId: 'crowndb-7b394',
  storageBucket: 'crowndb-7b394.appspot.com',
  messagingSenderId: '780676103080',
  appId: '1:780676103080:web:b682285cf4aec0ba917b9d',
  measurementId: 'G-YTNS793X1S',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log('getting user from firestore');

  const userRef = db.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

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

// configure firestore

firebase.initializeApp(config);
export const db = firebase.firestore();

// configure google auth
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = async (event) => {
  event.preventDefault();

  try {
    const userAuth = await auth.signInWithPopup(provider);
    return userAuth;
  } catch (err) {
    console.log(err);
  }
};
