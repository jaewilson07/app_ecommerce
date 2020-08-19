import React from 'react';

import Signin from '../../components/signin/signin.component';
import './signin-and-signup.styles.scss';

const SigninAndSignup = () => (
  <div className="signin-and-signup">
    <div className="title">SIGN IN</div>
    <Signin />
  </div>
);

export default SigninAndSignup;
