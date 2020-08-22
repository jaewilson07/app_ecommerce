import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart-dropdown/cart-dropdown.action';

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  cart_hidden: cart.cart_hidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: (cart_hidden) => dispatch(toggleCartHidden(cart_hidden)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
