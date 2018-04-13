import React, { Component } from 'react';
import { auth } from 'firebase';
import * as firebase from "firebase";
import * as routes from "../constants/routes";

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignInForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      ...INITIAL_STATE
    };
  }

  onSubmit = (event) => {

    event.preventDefault();

    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    firebase.auth().signInWithEmailAndPassword(email, password).then( () => {
      this.setState(() => ({ ...INITIAL_STATE }));
      history.push(routes.HOME);
    }).catch(error => {
        this.setState(byPropKey('error', error));
      });
  }

  render() {

    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      email === '' ||
      password === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default SignInForm;