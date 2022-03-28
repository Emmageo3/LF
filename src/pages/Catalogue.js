import React from "react";
import { useParams } from "react-router";
import AllModelCatalogue from "../components/AllModelCatalogue";
import "./../styles/catalogue.css";
function Catalogue() {
  const params = useParams();
  const models = [
    {
      id: 0,
      title: "Modèle fatima gold",
      category: "femmes",
      sousCategory: null,
      description: "Modèle chic",
      price: 19500,
    },
    {
      id: 1,
      title: "Modèle Mamadou grey",
      category: "hommes",
      sousCategory: "hauts",
      description: "Modèle chic",
      price: 16750,
    },
    {
      id: 2,
      title: "Modèle Sofia green",
      category: "femmes",
      sousCategory: null,
      description: "Modèle chic",
      price: 21500,
    },
    {
      id: 3,
      title: "Modèle Amy flowers",
      category: "femmes",
      sousCategory: null,
      description: "Modèle chic",
      price: 15000,
    },
    {
      id: 4,
      title: "Chapeau plage noir",
      category: "accessoires",
      sousCategory: null,
      description: "Modèle chic",
      price: 7500,
    },
    {
      id: 5,
      title: "Pyjama Fatou Grey",
      category: "femmes",
      sousCategory: null,
      description: "Modèle chic",
      price: 11500,
    },
    {
      id: 6,
      title: "Bonnet Magui White",
      category: "autres",
      sousCategory: null,
      description: "Modèle chic",
      price: 5000,
    },
    {
      id: 7,
      title: "Modèle fatima grey",
      category: "femmes",
      sousCategory: null,
      description: "Modèle chic",
      price: 14500,
    },
    {
      id: 8,
      title: "Modèle Mamadou motifs",
      category: "hommes",
      sousCategory: null,
      description: "Modèle chic",
      price: 14500,
    },
    {
      id: 9,
      title: "Modèle Mamadou traits",
      category: "hommes",
      sousCategory: null,
      description: "Modèle chic",
      price: 9500,
    },
  ];
  return (
    <main id="catalog" className="container column">
      <h2 className="container row"> Categorie / {params.name}</h2>
      <section className="container row row-top">
        <AllModelCatalogue models={models} ctg={params.name}/>
      </section>
    </main>
  );
}

export default Catalogue;
