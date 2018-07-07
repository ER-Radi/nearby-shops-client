import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignInPage from './containers/SignIn/SignInPage';
import SignUpPage from './containers/SignUp/SignUpPage';
import NearbyShopsPage from './containers/Shops/NearbyShopsPage';
import PreferredShopsPage from './containers/Shops/PreferredShopsPage';
import NotMatchPage from './containers/Errors/NotMatchPage';


export default ()  => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={SignInPage} />
            <Route exact path='/sign-up' component={SignUpPage} />
            <Route exact path='/nearby-shops' component={NearbyShopsPage} />
            <Route exact path='/preferred-shops' component={PreferredShopsPage} />
            <Route component={NotMatchPage} />
        </Switch>
    </BrowserRouter>
);
