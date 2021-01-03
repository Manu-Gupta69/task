import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import logo from "../img/logo.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo}/>
        <h3>Intugine</h3>
      </div>
      <div className="header__nav">
        <a href="#">Home</a>
        <a href="#">brand</a>
        <a href="#">transporter</a>
        <Avatar />
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
