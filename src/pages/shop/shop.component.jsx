import React from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';

import CollectionPage from '../collection/collection.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

const ShopPage = () => {
  const match = useRouteMatch();
  return (
    <div>
      <Link to="/shop">
        <h1>ShopPage</h1>
      </Link>
      <Route exact path={`${match.url}`} component={CollectionOverview} />

      <Route path={`${match.url}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
