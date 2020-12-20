import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import "./Header.css";

const Header = () => {
  return (
    <div className="ui secondary pointing menu app-header">
      <Link to="/" className="item">
        Bills
      </Link>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
