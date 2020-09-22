import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.scss';

import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

const CartIcon = ({ cartItemCount, toggleCartHidden }) => (
  <div
    className="cart-icon"
    onClick={() => {
      console.log(cartItemCount);
      toggleCartHidden();
    }}
  >
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartItemCount.quantity}</span>
  </div>
);

const mapStateToProps = (state) => ({
  cartItemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
