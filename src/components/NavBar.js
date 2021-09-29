import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarStyle from './NavBarStyle.js';
import Welcome from './Welcome.js';
import About from './About.js'

const NavBar = () => {
    return (
        <>
            <NavBarStyle />
            <Switch>
                <Route path="/welcome" exact component={Welcome} />
                <Route  path="/about" exact component={About}/>
            </Switch>
        </>
    )
}

export default NavBar;