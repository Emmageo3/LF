import React from "react";
import { useState } from "react";
import "./../styles/testimonials.css";
import img0 from "./../assets/client/0.png";
import img1 from "./../assets/client/1.png";
import img2 from "./../assets/client/2.png";
function Testimonials() {
  const testimonials = [
    {
      id: 2,
      client: "Soxna",
      img: {img2},
      comment: "Les vêtements sont de haute qualité, il n'y a rien à dire.",
    },
    {
      id: 0,
      client: "Fatima",
      img: {img0},
      comment:
        "J'ai été totalement satisfaite du service. Je vous le recommende fortement!",
    },
    {
      id: 1,
      client: "Abdoul",
      img: {img1},
      comment: "Service très rapide et de qualité, je n'ai jamais été déçu.",
    },
/*     {
      id: 3,
      client: "Halima",
      img: null,
      comment: "J'ai été séduite par tout ce professionnalisme",
    }, */
  ];
  const [slide, setSlide] = useState(1);
  const maxSlide = parseInt(testimonials.length / 3);
  console.log(maxSlide);
  return (
    <section id="testimonials" className="container row">
      <div className="slide row">{"<"}</div>
      {testimonials.map((comment) => (
        <div key={comment.id} className="col-3 column comment">
          {comment.img !== null && (
            <img className="col-10" src={"https://galsendigitalagency.com/francoise/" + comment.id + ".png"} alt={comment.client} />
          )}
          <p className="col-12 col-md-10">{comment.comment}</p>
          <h3 className="col-12 col-md-10">{comment.client}</h3>
        </div>
      ))}
      <div className="slide row">{">"}</div>
    </section>
  );
}

export default Testimonials;
