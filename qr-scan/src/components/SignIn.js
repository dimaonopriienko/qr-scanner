import React, { Component } from 'react';
import SignInForm from './SignInForm';

import {
  withRouter,
} from 'react-router-dom';


const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
  </div>


export default withRouter(SignInPage);