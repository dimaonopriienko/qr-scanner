import React, { Component } from 'react';


import AuthUserContext from './AuthUserContext';
import PasswordForgetPage from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

class AccountPage extends Component {
  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser =>
          <div>
            <div className="account-info">
              <p>
                Account: {authUser.email}
              </p>
            </div>
            <PasswordForgetPage />
            <h2>Change Password</h2>
            <PasswordChangeForm />
          </div>
        }
      </AuthUserContext.Consumer>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);