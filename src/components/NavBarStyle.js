import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarStyle = () => {
    return (
        <div>
        <NavLink 
            to="/welcome"
            activeStyle={{
                fontWeight: "bold"
            }}
            >Welcome
        </NavLink><br/>

        <NavLink 
            to="/about"
            activeStyle={{
                fontWeight: "bold"
            }}
            >About
        </NavLink><br/>

        <NavLink 
            to="/project"
            activeStyle={{
                fontWeight: "bold"
            }}
            >Projects
        </NavLink><br/>
    </div>
    )
}

export default NavBarStyle;