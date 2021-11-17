import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBarStyle from "./NavBarStyle.js";
import Welcome from "./Welcome.js";
import About from "./About.js";
import Projects from "./Projects";
import ContactForm from "./ContactForm.js";

const NavBar = () => {
  return (
    <>
      <NavBarStyle />
      <Switch>
        <Route path="/welcome" exact component={Welcome} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={ContactForm} />
      </Switch>
    </>
  );
};

export default NavBar;
