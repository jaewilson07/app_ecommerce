import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import CartDropdown from './cart-dropdown.component';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const CartDropdownContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(CartDropdown);

export default CartDropdownContainer;
