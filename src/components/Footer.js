import React from "react";
import "./../styles/footer.css"
import { Link } from "react-router-dom";
import tel from "./../assets/icons/tel.png"
import whatsapp from "./../assets/icons/whatsapp.png"
import twitter from "./../assets/icons/twitter.png"
import insta from "./../assets/icons/insta.png"

function Footer() {
  return (
    <div id="footer" className="container column">
      <div
        style={{ backgroundColor: "var(--primary-color", padding: "10px" }}
        className="container row"
      >
        <Link to="/aide">AIDE</Link>
        <Link to="/propos">A PROPOS</Link>
        <Link to="/informations">INFORMATIONS</Link>
        <Link to="/compte">NOS COMPTES</Link>
      </div>
      <div className="container colmn" style={{ backgroundColor: "var(--black-color", color:"var(--white-color" }}>
        <div className="container row">
        <a target="_blank" href="tel:+221777777777"><img width="50" src={tel} alt=""/></a>
        <a target="_blank" href="https://www.instagram.com/la_francoise221/"><img width="50" src={insta} alt=""/></a>
        <a target="_blank" href="https://twitter.com/lafrancoise221"><img width="50" src={twitter} alt=""/></a>
        <a target="_blank" href="https://api.whatsapp.com/send/?phone=221773927751&text&app_absent=0"><img width="50" src={whatsapp} alt=""/></a>
        </div>
        <div>La françoise © 2021</div>
      </div>
    </div>
  );
}

export default Footer;
