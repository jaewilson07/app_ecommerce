import { SHOP } from '../constants';

export const updateCollections = (collectionMap) => ({
  type: SHOP.UPDATE_COLLECTIONS,
  payload: collectionMap,
});
