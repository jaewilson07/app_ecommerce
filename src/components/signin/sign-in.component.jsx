import React, { Component } from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

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

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    const { emailSignInStart } = this.props;

    emailSignInStart({ email, password });
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;

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
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isgooglesignin
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (emailAndPassword) =>
    dispatch(emailSignInStart(emailAndPassword)),
});
export default connect(null, mapDispatchToProps)(Signin);
