import React from "react";
import { Link } from "react-router-dom";

function Lastcollection() {
  return (
    <div
      style={{ padding: "10px", backgroundColor: "var(--primary-color)" }}
      id="collection_cta"
      className="container column column-between"
    >
      <h3 style={{ padding: "10px" }} className="col-12 col-md-10 col-lg-8">
        VOIR NOTRE DERNIÈRE COLLECTION
      </h3>
      <Link to="/catalogue/femmes">
        <button className="fr-btn">SHOPPER</button>
      </Link>
    </div>
  );
}

export default Lastcollection;
