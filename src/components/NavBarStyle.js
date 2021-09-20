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
    </div>
    )
}

export default NavBarStyle;