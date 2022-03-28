import React from "react";
import { Link } from "react-router-dom";
import DynamicDropdown from "./DynamicDropdown";

function DynamicMobLinks({ list }) {
  return list.map((element) => (
    <Link to={"/catalogue/" + element.name}>
      <li className="fr-li"> {element.name} </li>

      <ul className="fr-dropdown column">
        <DynamicDropdown listsousCtg={element.sousCtg} />
      </ul>
    </Link>
  ));
}

export default DynamicMobLinks;
