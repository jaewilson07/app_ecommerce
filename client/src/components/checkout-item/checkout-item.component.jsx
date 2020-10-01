import React from 'react';

import './checkout-item.styles.scss';
import { connect } from 'react-redux';

import {
  addItemCart,
  dropItemCart,
  subtractItemCart,
} from '../../redux/cart/cart.action';

const CheckoutItem = ({
  item,
  addItemCart,
  subtractItemCart,
  dropItemCart,
}) => {
  const { name, quantity, price, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => subtractItemCart(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemCart(item)}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => dropItemCart(item)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemCart: (item) => dispatch(addItemCart(item)),
  subtractItemCart: (item) => dispatch(subtractItemCart(item)),
  dropItemCart: (item) => dispatch(dropItemCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
