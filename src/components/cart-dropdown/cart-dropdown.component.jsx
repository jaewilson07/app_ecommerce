import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { withRouter } from 'react-router-dom';
=======
>>>>>>> de7ef3dfdcd1e1812689c9ac1db9c7b1b01cb92e

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

<<<<<<< HEAD
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartDropdown = ({ cartItems, toggleCartHidden, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          toggleCartHidden();
          history.push('/checkout');
        }}
      >
        Go To Checkout
      </CustomButton>
=======
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
>>>>>>> de7ef3dfdcd1e1812689c9ac1db9c7b1b01cb92e
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
<<<<<<< HEAD

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
=======
export default connect(mapStateToProps)(CartDropdown);
>>>>>>> de7ef3dfdcd1e1812689c9ac1db9c7b1b01cb92e
