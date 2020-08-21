import React from 'react';

import Signin from '../../components/signin/sign-in.component';
import Signup from '../../components/signin/sign-up.component';

import './signin-and-signup.styles.scss';

const SigninAndSignup = () => (
  <div className="signin-and-signup">
    <Signin />
    <Signup />
  </div>
);

export default SigninAndSignup;
