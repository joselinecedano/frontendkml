import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg">
        <div className="flex items-center">
          <Link to="/">
            <img className="logo" src="/images/cherry.png" alt="cherry" />
          </Link>
           <a className=" ml-4 italic drop-shadow-glow"  href="https://app.acuityscheduling.com/schedule.php?owner=19702883">Book Now</a>
        </div>
       

        <div>
          <img
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            src="/images/circle-menu.png"
            alt="menu"
            onClick={toggleMenu}
          />
        </div>
        <div
          className={`${
            menuOpen ? "" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
          id="menu-button"
        >
          <ul className="pt-4 text-end md:flex md:justify-between md:pt-0">
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-red-200"
                to="/services"
                onClick={toggleMenu}
              >
                <div> Services </div>
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-red-200"
                to="/training"
                onClick={toggleMenu}
              >
                <div> Training </div>
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-red-200"
                to="/products"
                onClick={toggleMenu}
              >
                <div> Products </div>
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-red-200"
                to="/gallery"
                onClick={toggleMenu}
              >
                <div> Gallery </div>
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-red-200"
                to="/about"
                onClick={toggleMenu}
              >
                <div> Our Story </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
