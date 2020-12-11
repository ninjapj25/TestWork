import React from "react";
import { Navbar, NavbarBrand, NavLink, Badge } from "reactstrap";
import logo from "../images/logowork.PNG";

export default function TopNav() {
  return (
    <Navbar expand="md" className="top-nav">
      <NavbarBrand href="/">
        <img src={logo} alt="logo" />
      </NavbarBrand>
      <div className="top-nav-right">
        <NavLink> kannan@test.com</NavLink>
        <Badge href="#" color="info">
          K
        </Badge>
        <i className="material-icons power-icon">power_settings_new</i>
      </div>
    </Navbar>
  );
}
