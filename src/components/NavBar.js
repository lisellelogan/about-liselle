import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarStyle from './NavBarStyle.js';
import Welcome from './Welcome.js';
import About from './About.js'
import Projects from './Projects';

const NavBar = () => {
    return (
        <>
            <NavBarStyle />
            <Switch>
                <Route path="/welcome" exact component={Welcome} />
                <Route  path="/about" exact component={About}/>
                <Route path="/projects" exact component={Projects}/>
            </Switch>
        </>
    )
}

export default NavBar;