import React from "react";
import { NavLink } from "react-router-dom";

const NavBarStyle = () => {
  return (
    <div>
      <NavLink
        to="/welcome"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        Welcome
      </NavLink>
      <br />

      <NavLink
        to="/about"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        About
      </NavLink>
      <br />

      <NavLink
        to="/projects"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        Projects
      </NavLink>
      <br />

      <NavLink
        to="/contact"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        Contact
      </NavLink>
      <br />
    </div>
  );
};

export default NavBarStyle;
