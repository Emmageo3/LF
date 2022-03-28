import React from "react";
import { Link } from "react-router-dom";

function DynamicDropdown({ listsousCtg }) {
  if (listsousCtg != null) {
    return listsousCtg.map((ctg) => (
      <li className="dropdownli">
        <Link to={"/catalogue/" + ctg.parent}>
          {ctg.name}
        </Link>
      </li>
    ));
  } else return "";
}

export default DynamicDropdown;
