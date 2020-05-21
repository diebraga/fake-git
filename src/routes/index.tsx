import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../dashboard';
import SignIn from '../_signin';

export const Routes: React.FC = () => (
  <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />

</Switch>

);

export default Routes;
