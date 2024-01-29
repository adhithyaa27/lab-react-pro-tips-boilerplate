import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="kAL">
        <Link to="/">🤜 KALVIUM 🤛</Link>
        </div>
        <div className="side">
        <Link to="/contacts">CONTACTS</Link>
        <Link to="/forms">REGITRATION</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
