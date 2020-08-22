import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';
import { toggleCartHidden } from '../../redux/cart-dropdown/cart-dropdown.action';

const CartIcon = ({ cartItems, toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartItems ? cartItems.length : 0}</span>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  cart_hidden: cart.cart_hidden,
  cartItems: cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: (cart_hidden) => dispatch(toggleCartHidden(cart_hidden)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
