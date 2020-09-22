import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = memoize(
  createSelector([selectShopCollections], (collections) =>
    Object.keys(collections).map((key) => collections[key])
  )
);

// this is memoization (using selectShopCollections as a parameter of createSelector)
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam]
  )
);
