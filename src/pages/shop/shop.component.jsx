import React, { Component } from 'react';
import { SHOP_DATA } from './constants';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = { collections: SHOP_DATA };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        <h1>ShopPage</h1>
        {collections.map(({ id, ...section }) => (
          <CollectionPreview key={id} section={section} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
