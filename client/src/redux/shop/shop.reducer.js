import { SHOP } from '../constants';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOP.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };

    case SHOP.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };

    case SHOP.FETCH_COLLECTIONS_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
