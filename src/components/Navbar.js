import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as Linkscroll } from "react-scroll";
import DynamicLinks from "./DynamicLinks";
import DynamicMobLinks from "./DynamicMobLinks";
import menu from "./../assets/icons/menu.png";
import exit from "./../assets/icons/exit.png";
import logo from "./../assets/logo.png";
function Navbar() {
  const ctgList = [
    {
      id: 0,
      name: "hommes",
      sousCtg: [
        {
          id: 0,
          name: "hauts",
          parent: "hommes",
        },
        {
          id: 1,
          name: "pantalons",
          parent: "hommes",
        },
        {
          id: 2,
          name: "cravate",
          parent: "hommes",
        },
      ],
    },
    {
      id: 1,
      name: "femmes",
      sousCtg: [
        {
          id: 0,
          name: "robes",
          parent: "femmes",
        },
        {
          id: 1,
          name: "pantalons",
          parent: "femmes",
        },
      ],
    },
    {
      id: 3,
      name: "autres",
      sousCtg: null,
    },
    {
      id: 4,
      name: "accessoires",
      sousCtg: null,
    },
  ];
  const [menuMob, setmenuMob] = useState(false);
  const changeMenu = () => {
    setmenuMob(!menuMob);
  };
  useEffect(() => {
    let theRight = document.querySelector("#mob-navbar").style.right;
    if (theRight === "100%") {
      document.querySelector("#mob-navbar").style.right = "0%";
    } else document.querySelector("#mob-navbar").style.right = "100%";
  }, [menuMob]);
  return (
    <div>
      <div className="row" id="bg-button">
        <img onClick={changeMenu} width="35" src={menu} alt="menu" />
      </div>
      <ul className="container row" id="navbar">
        <li className="fr-li">
          <Link to="/home"> ACCUEIL </Link>
        </li>
        <DynamicLinks list={ctgList} />
        <li className="fr-li">
          <Linkscroll to="footer" smooth={true} duration={1000}>
            CONTACT
          </Linkscroll>
        </li>
      </ul>

      <ul onClick={changeMenu} className="container column" id="mob-navbar">
        <img width="35" id="mb-menu-logo" src={logo} alt="la françoise" />
        <img
          onClick={changeMenu}
          id="exit-btn"
          width="35"
          src={exit}
          alt="exit-btn"
        />

        <Link to="/La-francoise">
          <li className="fr-li"> ACCUEIL </li>
        </Link>

        <DynamicMobLinks list={ctgList} />

        <Linkscroll to="footer" smooth={true} duration={1000}>
          <li className="fr-li"> CONTACT </li>
        </Linkscroll>
      </ul>
    </div>
  );
}

export default Navbar;
