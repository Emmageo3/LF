import React from "react";
import "./../styles/ScrollToTop.css";
import { Link } from "react-scroll";
import topButton from "./../assets/icons/topButton.png";

function ScrollToTop() {
  return (
    <div id="scrollUp">
      <Link to="scrollUpAnchor" smooth={true} duration={1000}>
        <img src={topButton} alt="Top button"/>
      </Link>
    </div>
  );
}

export default ScrollToTop;
