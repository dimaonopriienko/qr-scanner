import React, { Component } from 'react';


import AuthUserContext from './AuthUserContext';
import PasswordForgetPage from './PasswordForget';
import PasswordChangeForm from './PasswordChange';

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

export default AccountPage;
