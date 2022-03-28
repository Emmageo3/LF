import React, { useEffect, useState } from 'react'
import axios from "axios"; import { useParams } from "react-router";
import './../styles/search.css';
import "./../styles/lastmodels.css";
function Search() {
    const params = useParams();

    /* GET ARTICLES */
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('https://sugar-paper.com/article');
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        setRefresh(false)
        fetchData();
    }, [refresh]);

    /* Calcul TOTAL */
    function calculTotal() {
        let total = 0;
        data.map((article) => (
            localStorage[article.id] ? total += localStorage[article.id] * article.prix_article : ""
        ))
        return (total + " CFA");
    }

    /* LocalStorage gestion */
    const addCart = (id) => {
        if (!localStorage[id]) {
            localStorage.setItem(id, 1);
            document.getElementById("total-panier").innerHTML = calculTotal();
        }
    }
    return (
        <div id="search" className="container column">
            <div className="title container row">
                <h3>Rechercher un produit</h3>
            </div>
            <div style={{ paddingBottom: "10px" }}>
                Produit recherché: {params.name}
            </div>
            {loading && <div>
                Recherche en cours...
            </div>}
            {!loading && <div className="container">
                <div className="container row row-top">
                    {data.map((model) => (
                        <div key={model.id} style={{ backgroundColor: "var(--grey-color)", padding: "10px", display: model.nom_article.includes(params.name) ? "flex" : "none" }} className="fr-model col-6 col-md-3 col-xl-2 row">
                            <div className="container column">
                                <img className="container" src={model.url_img_article} alt={model.title} />
                                <p className="container row"> {model.nom_article} </p>
                                <p className="container row"> {model.prix_article} CFA </p>
                                <button onClick={() => { addCart(model.id) }} className="fr-btn"> AJOUTER AU PANIER </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>}

        </div>
    )
}

export default Search
