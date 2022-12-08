import React from 'react';

import Register from './Screen/Register';
import Login from './Screen/Login';
import {Router, Scene, Stack} from 'react-native-router-flux';

const Route = props => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" initial component={Login} hideNavBar={true} />
        <Scene key="register" component={Register} hideNavBar={true} />
      </Stack>
    </Router>
  );
};

export default Route;
