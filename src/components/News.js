import React from "react";
import "./../styles/news.css";
function News(props) {
  if (props.new.img != null) {
    return (
      <div className="container column news-img">
        <h2 className="container column"> {props.new.text} </h2>
        <img
          className="container"
          src={props.new.img.baniere}
          alt={props.new.text}
        />
        <button className="fr-btn new-cta"> {props.new.cta} </button>
      </div>
    );
  } else {
    return (
      <div className="container news-no-img">
        <h2> {props.new.text} </h2>
        <button className="fr-btn new-cta"> {props.new.cta} </button>
      </div>
    );
  }
}

export default News;
