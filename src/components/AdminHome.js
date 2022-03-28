import React, { useState } from "react";
import "./../styles/admin.css";
import CrudCollection from "./CrudCollection";
import CrudCtg from "./CrudCtg";
import Crudsousctg from "./CrudsousCtg";
import CrudArticle from "./CrudArticle";
import Client from "./Client";
import Commande from "./Commande";
import dashboard from "./../assets/icons/dashboard.png";
import logo from "./../assets/logo.png";
function AdminHome() {

  const [ctg, setCtg] = useState(true);
  const [Sousctg, setSousctg] = useState(false);
  const [article, setarticle] = useState(false)
  const [collection, setcollection] = useState(false)
  const [commande, setcommande] = useState(false)
  const [client, setclient] = useState(false)
  function changerMenu() {
    setCtg(false);
    setSousctg(false);
    setarticle(false);
    setcollection(false);
    setcommande(false);
    setclient(false);
    return 0;
  }

  return <div className="container row row-top row-between" id="admin-home">
    <div className="column column-top col-12 col-lg-3 col-xl-2" id="admin-menu">
      <header className="container row row-left">
        <img style={{ margin: "5px" }} width="15" src={dashboard} alt="Dashboard" /> Menu
      </header>
      <nav className="container column column-top">
        <ul className="container">
          <li onClick={() => { changerMenu(); setCtg(true) }} className="container row row-left menu-list">Catégorie</li>
          <li onClick={() => { changerMenu(); setSousctg(true) }} className="container row row-left menu-list">Sous catégorie</li>
          <li onClick={() => { changerMenu(); setarticle(true) }} className="container row row-left menu-list">Article</li>
          <li onClick={() => { changerMenu(); setcollection(true) }} className="container row row-left menu-list">Collection</li>
          <li onClick={() => { changerMenu(); setcommande(true) }} className="container row row-left menu-list">Commande</li>
          <li onClick={() => { changerMenu(); setclient(true) }} className="container row row-left menu-list">Client</li>
        </ul>
      </nav>
    </div>

    <div className="col-12 col-lg-9 col-xl-10 column column-top column-left" id="admin-info">
      <div id="gitgradient" className="container row row-left"> </div>
      <header className="container row row-left" >
        <img width="30" src={logo} alt="La françoise" />
        <h1>PLATEFORME ADMINISTRATEUR</h1>
      </header>
      <div className="container column column-top" id="admin-action">

        {ctg ? <CrudCtg /> : ""}
        {Sousctg ? <Crudsousctg /> : ""}
        {collection ? <CrudCollection /> : ""}
        {article ? <CrudArticle /> : ""}
        {client ? <Client /> : ""}
        {commande ? <Commande /> : ""}
      </div>

    </div>
  </div>;
}

export default AdminHome;
