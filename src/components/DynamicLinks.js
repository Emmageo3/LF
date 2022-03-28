import React from "react";
import { Link } from "react-router-dom";
import DynamicDropdown from "./DynamicDropdown";
function DynamicLinks({ list }) {
  return list.map((element) => (
    <li className="fr-li">
        
      <Link to={"/catalogue/" + element.name}>{element.name}</Link>
      <ul className="fr-dropdown column">
        <DynamicDropdown listsousCtg={element.sousCtg}/>
      </ul>
    </li>
  ));
}

export default DynamicLinks;
