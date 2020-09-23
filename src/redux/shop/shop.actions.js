import { SHOP } from '../constants';

import {
  db,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

//a thunk is an action creator that returns a dispatch function

export const fetchCollectionsStart = () => ({
  type: SHOP.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: SHOP.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: SHOP.FETCH_COLLECTIONS_ERROR,
  payload: errorMessage,
});

export const fetchCollectionStartAsync = () => {
  console.log('fetching');
  return (dispatch) => {
    const collectionRef = db.collection('collections');

    try {
      dispatch(fetchCollectionsStart());

      collectionRef.get().then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      });
    } catch (err) {
      dispatch(fetchCollectionsFailure(err.message));
    }
  };
};
