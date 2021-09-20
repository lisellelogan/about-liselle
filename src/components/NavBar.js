import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarStyle from './NavBarStyle.js';
import Welcome from './Welcome.js';

const NavBar = () => {
    return (
        <>
            <NavBarStyle />
            <Switch>
                <Route path="/welcome" exact component={Welcome} />
            </Switch>
        </>
    )
}

export default NavBar;