import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SigninAndSignup from './pages/signin-and-signup/signin-and-signup.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/app_ecommerce" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />

        <Route exact path="/signin" component={SigninAndSignup} />
      </Switch>
    </div>
  );
}

export default App;
