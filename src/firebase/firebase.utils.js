import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const config = {
  apiKey: 'AIzaSyDK1RjfOdv4u_lpfYjkre-YTRZxeaB2L2o',
  authDomain: 'crowndb-7b394.firebaseapp.com',
  databaseURL: 'https://crowndb-7b394.firebaseio.com',
  projectId: 'crowndb-7b394',
  storageBucket: 'crowndb-7b394.appspot.com',
  messagingSenderId: '780676103080',
  appId: '1:780676103080:web:b682285cf4aec0ba917b9d',
  measurementId: 'G-YTNS793X1S',
};

// --- INITIALIZE CONNECTION AND AUTHENTICATION PROVIDER --- //
firebase.initializeApp(config);
export const db = firebase.firestore();

// FIRESTORE CRUD OPERATIONS //
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = db.collection(collectionKey);

  // create a set of instructions for each object in the incoming array
  const batch = db.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    console.log(obj, newDocRef);
    batch.set(newDocRef, obj);
  });

  await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collection) => {
  const convertedCollection = collection.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      routeName: encodeURI(title),
      title,
      items,
    };
  });

  const mapCollection = convertedCollection.reduce((accum, doc) => {
    accum[doc.title.toLowerCase()] = doc;
    return accum;
  }, {});

  return mapCollection;
};
