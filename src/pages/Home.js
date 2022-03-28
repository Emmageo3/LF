import React from "react";
import News from "../components/News";
import baniere from "./../assets/baniere.webp";
import Lastmodels from "../components/Lastmodels";
import Testimonials from "../components/Testimonials";
import Lastcollection from "../components/Lastcollection";
import img0 from "./../assets/models/0.webp";
import img1 from "./../assets/models/1.webp";
import img2 from "./../assets/models/2.webp";
import img3 from "./../assets/models/3.webp";
import img4 from "./../assets/models/4.webp";
import img5 from "./../assets/models/5.webp";
import img6 from "./../assets/models/6.webp";
import img7 from "./../assets/models/7.webp";
import img8 from "./../assets/models/8.webp";
import img9 from "./../assets/models/9.webp";

function Home() {
  const news = {
    id: 0,
    img: { baniere },
    cta: "SHOPPER",
    text: "Profitez de -10% sur tout le site",
  };
  const models = [
    {
      id: 0,
      title: "Modèle fatima gold",
      imgUrl: { img0 },
      category: "femmes",
      sousCategory: null,
      description: "Modèle chic",
      price: 19500,
    },
    {
      id: 1,
      title: "Modèle Mamadou grey",
      imgUrl: { img1 },
      category: "hommes",
      sousCategory: "hauts",
      description: "Modèle chic",
      price: 16750,
    },
    {
      id: 2,
      title: "Modèle Sofia green",
      imgUrl: { img2 },
      category: "femmes",
      sousCategory: null,
      description: "Modèle chic",
      price: 21500,
    },
    {
      id: 3,
      title: "Modèle Amy flowers",
      imgUrl: { img3 },
      category: "femmes",
      sousCategory: null,
      description: "Modèle chic",
      price: 15000,
    },
    {
      id: 4,
      title: "Chapeau plage noir",
      imgUrl: { img4 },
      category: "accessoires",
      sousCategory: null,
      description: "Modèle chic",
      price: 7500,
    },
    {
      id: 5,
      title: "Pyjama Fatou Grey",
      imgUrl: { img5 },
      category: "femmes",
      sousCategory: null,
      description: "Modèle chic",
      price: 11500,
    },
    {
      id: 6,
      title: "Bonnet Magui White",
      imgUrl: { img6 },
      category: "autres",
      sousCategory: null,
      description: "Modèle chic",
      price: 5000,
    },
    {
      id: 7,
      title: "Modèle fatima grey",
      imgUrl: { img7 },
      category: "femmes",
      sousCategory: null,
      description: "Modèle chic",
      price: 14500,
    },
    {
      id: 8,
      title: "Modèle Mamadou motifs",
      imgUrl: { img8 },
      category: "hommes",
      sousCategory: null,
      description: "Modèle chic",
      price: 14500,
    },
    {
      id: 9,
      title: "Modèle Mamadou traits",
      imgUrl: { img9 },
      category: "hommes",
      sousCategory: null,
      description: "Modèle chic",
      price: 9500,
    },
  ];
  const modelshome = [
    {
      id: 0,
      title: "Modèle fatima gold",
      imgUrl: { img0 },
      category: "femmes",
      sousCategory: null,
      description: "Modèle chic",
      price: 19500,
    },
    {
      id: 1,
      title: "Modèle Mamadou grey",
      imgUrl: { img1 },
      category: "hommes",
      sousCategory: "hauts",
      description: "Modèle chic",
      price: 16750,
    },
    {
      id: 2,
      title: "Chapeau plage noir",
      imgUrl: { img4 },
      category: "accessoires",
      sousCategory: null,
      description: "Modèle chic",
      price: 7500,
    },
    {
      id: 3,
      title: "Bonnet Magui White",
      imgUrl: { img6 },
      category: "autres",
      sousCategory: null,
      description: "Modèle chic",
      price: 5000,
    },
  ];
  console.log(news[0]);
  return (
    <main id="main">
      <News new={news} />
      <section className="container row">
        <Lastmodels models={modelshome} />
      </section>
      <Lastcollection />
      <Testimonials />
    </main>
  );
}

export default Home;
