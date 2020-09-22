import React, { Component } from 'react';

import './signin.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);

    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState;
    console.log('click');
    this.setSate({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        <h2>I already have an acount</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={(event) => this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            required
            onChange={this.handleChange}
          />

          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            required
            onChange={this.handleChange}
          />
          <CustomButton type="submit" value="Submit Form">
            Sign In
          </CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            Sign In With Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default Signin;
