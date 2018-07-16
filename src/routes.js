import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import SignInUpPage from './containers/SignInUp/SignInUpPage';
import NearbyShopsPage from './containers/Shops/NearbyShopsPage';
import PreferredShopsPage from './containers/Shops/PreferredShopsPage';
import NotMatchPage from './containers/Errors/NotMatchPage';

import { loadState } from './localStorage';


const checkAuth = () => {
    const state = loadState();

    if ( !state ){
        return false;
    }

    const { user } = state;
    if ( ! user ){
        return false;
    }

    const { token } = user;
    if( !token ){
        return false;
    }

    try {
        const { exp } = jwt_decode(token);
        if( exp < new Date().getTime() / 1000 ){
            return false;
        }
    }
    catch (e) {
        return false;
    }
    
    return true;
}

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        checkAuth()
        ? <Component {...props} />
        : <Redirect to={{pathname: '/'}} />
    )}/>
);

const LoginRoute = ({component: Component, ...props}) => (
    <Route {...props} render={(props) => (
        !checkAuth()
        ? <Component {...props} />
        : <Redirect to={{pathname: '/nearby-shops'}} />
    )}/>
);

export default ()  => (
    <BrowserRouter>
        <Switch>
            <LoginRoute exact path='/' component={SignInUpPage} />
            <PrivateRoute exact path='/nearby-shops' component={NearbyShopsPage} />
            <PrivateRoute exact path='/preferred-shops' component={PreferredShopsPage} />
            <Route component={NotMatchPage} />
        </Switch>
    </BrowserRouter>
);
