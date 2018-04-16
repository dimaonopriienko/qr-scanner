import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

class Navigation extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const NavigationAuth = () =>
      <ul>
        <li><Link to={routes.LANDING}>Landing</Link></li>
        <li><Link to={routes.QReader}>QReader</Link></li>
        <li><Link to={routes.ACCOUNT}>Account</Link></li>
        <li><SignOutButton /></li>
      </ul>

    const NavigationNonAuth = () =>
      <ul>
        <li><Link to={routes.LANDING}>Landing</Link></li>
        <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
      </ul>
    return (
      <div>
        { this.props.authUser
          ? <NavigationAuth />
          : <NavigationNonAuth />
        }
      </div>
    );
  }
}

export default Navigation;
