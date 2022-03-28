import React from "react";
import Navbar from "./Navbar";
import logo from "./../assets/logo.png";
import loupe from "./../assets/icons/loupe.png";
import cart from "./../assets/icons/cart.png";
import { Link } from "react-router-dom";
import "./../styles/header.css";

function Header() {
  return (
    <header id="header" className="container column">
      <span id="scrollUpAnchor"></span>
      <div id="header-gradient" className="container column">
        <span> </span>
      </div>
      <div className="container row row-between">
        <div id="header-left" className="row">
          <img width="40" src={logo} alt="Logo la Françoise" />
          <form className="row" id="search-bar">
            <input type="search" placeholder="CHERCHER" />
            <button type="submit">
              <img width="20" src={loupe} alt="loupe" />
            </button>
          </form>
        </div>

        <div id="header-center" className="row">
          <h1>LA FRANÇOISE</h1>
        </div>

        <div id="header-right" className="row">
          <select>
            <option selected>XOF</option>
          </select>
          <Link to="/panier">
            <img width="40" src={cart} alt="panier" />
          </Link>
        </div>
      </div>
      <nav className="container row">
        <Navbar />
      </nav>
    </header>
  );
}

export default Header;
