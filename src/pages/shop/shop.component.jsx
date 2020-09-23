import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionPage from '../collection/collection.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {
  convertCollectionsSnapshotToMap,
  db,
} from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    isLoading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = db.collection('collections');

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;

    return (
      <div>
        <Link to="/shop">
          <h1>ShopPage</h1>
          <Route
            exact
            path={`${match.url}`}
            render={(props) => (
              <CollectionsOverviewWithSpinner
                isLoading={isLoading}
                {...props}
              />
            )}
          />
          <Route
            path={`${match.url}/:collectionId`}
            render={(props) => (
              <CollectionPageWithSpinner isLoading={isLoading} {...props} />
            )}
          />
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
