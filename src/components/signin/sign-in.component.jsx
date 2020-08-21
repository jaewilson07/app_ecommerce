import React, { Component } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setSate({ email: '', password: '' });
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="form__sign">
        <h2>I already have an acount</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
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
          <div className="buttons">
            <CustomButton type="submit" value="Submit Form">
              Sign In
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isgooglesignin>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
