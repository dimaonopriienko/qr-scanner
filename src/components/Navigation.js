import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

import './Navigation.css';
class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const NavigationAuth = () => (
      <ul className="main-navigation">
        <li>
          <Link to={routes.LANDING}>Landing</Link>
        </li>
        <li>
          <Link to={routes.QReader}>QReader</Link>
        </li>
        <li>
          <Link to={routes.ACCOUNT}>Account</Link>
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    );

    const NavigationNonAuth = () => (
      <ul className="main-navigation">
        <li>
          <Link to={routes.LANDING}>Landing</Link>
        </li>
        <li>
          <Link to={routes.SIGN_IN}>Sign In</Link>
        </li>
        <li>
          <Link to={routes.SIGN_UP}>Sign Up</Link>
        </li>
      </ul>
    );
    return (
      <AuthUserContext.Consumer>
        {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
      </AuthUserContext.Consumer>
    );
  }
}

export default Navigation;
