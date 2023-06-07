import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <Link to="/">
        <img
          className="logo bg-transparent"
          src="/images/cherry.png"
          alt="cherry"
        />
      </Link>

      <Link to="/services">
        <div> Services </div>
      </Link>

      <Link to="/training">
        <div> Training </div>
      </Link>

      <Link to="/products">
        <div> Products </div>
      </Link>

      <Link to="/gallery">
        <div> Gallery </div>
      </Link>
    </nav>
  );
};
export default Header;
