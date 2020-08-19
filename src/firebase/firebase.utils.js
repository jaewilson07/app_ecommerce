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

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = async () => {
  console.log('sign in');
  try {
    const res = await firebase.auth().signInWithPopup(provider);
    const token = res.credential.accessToken;
    const user = res.user;
  } catch (err) {
    console.log(err);
  }
};
