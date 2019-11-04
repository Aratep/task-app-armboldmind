import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import {PrivateRoute} from './components/hoc/PrivateRoute';
import Login from './pages/login/Login';
import NotFound from './pages/not-found/NotFound';
import Dashboard from './pages/dashboard/Dashboard';

export const AppRoutes = () => (
    <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/dashboard" component={Dashboard}/>
        <Route path='/404' component={NotFound} />
        <Redirect from='*' to='/404' />
    </Switch>
)