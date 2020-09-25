import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartItemsCount,
} from '../../redux/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/StripeButton.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, cartItemCount }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} item={item} />
    ))}

    <div className="total">
      <span>total: ${cartItemCount.total}</span>
    </div>
    <div className="test-warning">
      *Use the following test credit card for payments
      <br />
      4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
    </div>
    <StripeButton price={cartItemCount.total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItemCount: selectCartItemsCount,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPage);
