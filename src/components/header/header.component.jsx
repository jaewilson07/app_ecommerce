import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { createStructuredSelector } from 'reselect';
=======
>>>>>>> de7ef3dfdcd1e1812689c9ac1db9c7b1b01cb92e

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

<<<<<<< HEAD
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';

=======
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

>>>>>>> de7ef3dfdcd1e1812689c9ac1db9c7b1b01cb92e
const Header = ({ currentUser, cart_hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />{' '}
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div
          className="option"
          onClick={() => {
            console.log('click');
            auth.signOut();
          }}
        >
          Sign Out
        </div>
      ) : (
        <Link className="option" to="/signin">
          Sign In
        </Link>
      )}
      <CartIcon />
    </div>
    {!cart_hidden ? <CartDropdown /> : null}
  </div>
);

<<<<<<< HEAD
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cart_hidden: selectCartHidden,
=======
const mapStateToProps = ({ user: { currentUser }, cart: { cart_hidden } }) => ({
  currentUser,
  cart_hidden,
>>>>>>> de7ef3dfdcd1e1812689c9ac1db9c7b1b01cb92e
});

export default connect(mapStateToProps)(Header);
