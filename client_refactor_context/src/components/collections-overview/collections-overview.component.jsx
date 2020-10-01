import React, { useContext } from 'react';

import { ShopContext } from '../../providers/shop/shop.provider';

import CollectionPreview from '../collection-preview/collection-preview.component';
import './collections-overview.styles.scss';

const CollectionsOverview = () => {
  const { collectionsForPreview } = useContext(ShopContext);

  console.log('overview', collectionsForPreview);
  return (
    <div className="collections-overview">
      {collectionsForPreview.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
