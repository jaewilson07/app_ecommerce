import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map((collection) => (
      <CollectionPreview key={collection.id} section={collection} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
