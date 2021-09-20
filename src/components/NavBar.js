import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome.js';

const NavBar = () => {
    return (
        <Switch>
            <Route path="/welcome" exact component={Welcome} />
        </Switch>
    )
}