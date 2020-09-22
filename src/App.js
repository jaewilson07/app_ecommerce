import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
=======

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
>>>>>>> de7ef3dfdcd1e1812689c9ac1db9c7b1b01cb92e

import './App.css';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Signin from './pages/signin-and-signup/signin-and-signup.component';

<<<<<<< HEAD
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import CheckoutPage from './pages/checkout/checkout.component';
=======
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
>>>>>>> de7ef3dfdcd1e1812689c9ac1db9c7b1b01cb92e

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

<<<<<<< HEAD
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        return userRef.onSnapshot((user_snapShot) => {
          setCurrentUser({
            id: user_snapShot.id,
            ...user_snapShot.data(),
          });
        });
      }

=======
    console.log('component launch');

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        return userRef.onSnapshot((user_snapShot) => {
          setCurrentUser({
            id: user_snapShot.id,
            ...user_snapShot.data(),
          });
        });
      }
      console.log('i am here');

>>>>>>> de7ef3dfdcd1e1812689c9ac1db9c7b1b01cb92e
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
<<<<<<< HEAD
          <Route path="/shop" component={ShopPage} />
=======
          <Route exact path="/shop" component={ShopPage} />
>>>>>>> de7ef3dfdcd1e1812689c9ac1db9c7b1b01cb92e

          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <Signin />)}
          />
<<<<<<< HEAD

          <Route exact path="/checkout" component={CheckoutPage} />
=======
>>>>>>> de7ef3dfdcd1e1812689c9ac1db9c7b1b01cb92e
        </Switch>
      </div>
    );
  }
}

<<<<<<< HEAD
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
=======
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
>>>>>>> de7ef3dfdcd1e1812689c9ac1db9c7b1b01cb92e
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
