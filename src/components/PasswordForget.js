import React from 'react';
import PasswordForgetForm from './PasswordForgetForm';

import {withRouter} from 'react-router-dom';

const PasswordForgetPage = ({history}) => (
  <div>
    <h2>Forget Password</h2>
    <PasswordForgetForm history={history} />
  </div>
);

export default withRouter(PasswordForgetPage);
