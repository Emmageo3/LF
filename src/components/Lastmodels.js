import React from "react";
import "./../styles/lastmodels.css";
import { Link } from "react-router-dom";

function Lastmodels({ models }) {
  const chemins = models.map(
    (model) => "https://galsendigitalagency.com/francoise/" + model.id + ".webp"
  );
  
  return models.map((model) => (
    <div className="fr-model col-6 col-md-3 row">
      <img src={chemins[model.id]} alt={model.title} />
      <Link to={"/catalogue/" + model.category}>
        {" "}
        <button className="fr-btn"> {model.category} </button>
      </Link>
    </div>
  ));
}

export default Lastmodels;
