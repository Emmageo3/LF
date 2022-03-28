import React from "react";

function AllModelCatalogue({ models, ctg }) {
  console.log(ctg);

  const urlImg = "https://galsendigitalagency.com/francoise/";
  return models.map(
    (model) =>
      model.category === ctg && (
        <div className="fr-card col-6 col-md-3 column">
          <div className="container">
            <img src={urlImg + model.id + ".webp"} alt={model.title} />
            <h3>{model.title}</h3>
          </div>
          <p>{model.description}</p>
          <p>{model.price} CFA</p>
        </div>
      )
  );
}

export default AllModelCatalogue;
