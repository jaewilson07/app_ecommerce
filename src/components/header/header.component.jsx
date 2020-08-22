import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

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
    {cart_hidden ? <CartDropdown /> : null}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { cart_hidden } }) => ({
  currentUser,
  cart_hidden,
});

export default connect(mapStateToProps)(Header);
