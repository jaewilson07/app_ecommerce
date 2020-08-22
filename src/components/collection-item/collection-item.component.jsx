import React from 'react';
import { connect } from 'react-redux';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addItemCart } from '../../redux/cart/cart-dropdown.action';

const collectionItem = ({ item, addItemCart }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        isinverted={true}
        onClick={() => {
          addItemCart(item);
        }}
      >
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemCart: (item) => dispatch(addItemCart(item)),
});

export default connect(null, mapDispatchToProps)(collectionItem);
