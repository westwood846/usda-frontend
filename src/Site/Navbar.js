import React from "react";
import { useLocation } from "react-router";

import { AppBar, Toolbar } from "@material-ui/core";

import Logo from "./Logo";

export const Navbar = () => {
  const { pathname } = useLocation();
  if (/^\/$/.test(pathname) || /^\/search/.test(pathname)) return null;
  return (
    <AppBar position="static">
      <Toolbar>
        <Logo variant="white" />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
