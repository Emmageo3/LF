import React, { useEffect, useState } from 'react'
import axios from "axios";

function Commande() {

    function malformedJSON2Array(tar) {
        let arr = [];
        tar = tar.replace(/^\{|\}$/g, '').split(';');
        for (var i = 0, cur, pair; cur = tar[i]; i++) {
            arr[i] = {};
            pair = cur.split(':');
            arr[i][pair[0]] = /^\d*$/.test(pair[1]) ? +pair[1] : pair[1];
        }
        return arr;
    }

    const objecttest = '[{ "id": "0", "txt": "zero"},{ "id": "1", "txt": "one"}]';

    let affff = JSON.parse(objecttest);
    console.log(affff);

    const [loading, setLoading] = useState(true);
    const [commande, setCommande] = useState([])
    const [client, setClient] = useState([])
    const [article, setArticle] = useState([])
    const [refresh, setRefresh] = useState(true);
    const [articlecommande, setArticlecommande] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('https://lafrancoise221.com/commande');
                setCommande(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        setRefresh(false)
        fetchData();
    }, [refresh]);

    useEffect(() => {
        for (let i = 0; i < commande.length; i++) {
            setArticlecommande(malformedJSON2Array(commande[i].articles))
        }
        console.log(articlecommande);
    }, [commande]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('https://lafrancoise221.com/client');
                setClient(response);

            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        setRefresh(false)
        fetchData();
    }, [refresh]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('https://lafrancoise221.com/article');
                setArticle(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        setRefresh(false)
        fetchData();
    }, [refresh]);


    function deleteCommande(e, id) {
        e.preventDefault();
        axios.delete(`https://lafrancoise221.com/commande/${id}`);
        setRefresh(true);
    }
    return (
        <div className="container column">
            <header className="container row row-between title">
                <h3>Commandes</h3>
                <img title="Rafraichir" style={{ backgroundColor: "var(--grey-color)", margin: "5px", padding: "5px", borderRadius: "100%", cursor: "pointer", border: "1px solid black" }} onClick={() => { setRefresh(true) }} src="https://img.icons8.com/dotty/20/000000/refresh.png" alt="refresh  btn" />
            </header>
            {loading && <div>Loading...</div>}
            {!loading && (
                <div className="container row row-left row-top">
                    {
                        commande.map((commande) => (
                            <div style={{ padding: "10px 4px" }} className="col-12 col-sm-6 col-md-4 col-xl-3 column">
                                <div key={commande.id} className="command-card container column commande-card">
                                    <div style={{ borderBottom: "1px solid black", padding: "10px 0px" }} className="container row row-left">
                                        ID : {commande.id} <br />
                                        Mode de paiement : {commande.mode_paiement} <br />
                                        Statut : {commande.status} <br />
                                        Date: {commande.created_at}
                                    </div>
                                    <div style={{ borderBottom: "1px solid black", padding: "10px 0px" }} lassName="container row row-left">
                                        <h4 style={{ textDecoration: "underline" }}>Informations sur le client:</h4>
                                        {client.map((account) => (
                                            account.id === commande.id_client ?
                                                <div className="container row row-left">
                                                    <div className="container row row-left">
                                                        Nom complet : {account.prenom_nom_client}
                                                    </div>
                                                    <div className="container row row-left">
                                                        Adresse  : {account.adresse_client}
                                                    </div>
                                                    <div className="container row row-left">
                                                        Email : {account.email_client}
                                                    </div>
                                                    <div className="container row row-left">
                                                        Tel : {account.tel_client}
                                                    </div>
                                                </div>
                                                : ""
                                        ))}
                                    </div>
                                    <div style={{ borderBottom: "1px solid black", padding: "10px 0px" }} className="container row row-left">
                                        <h4 style={{ textDecoration: "underline" }}>Articles commandés:</h4>
                                        {
                                            articlecommande.map((item) => (
                                                article.map((produit) => (
                                                    produit.id === item.article ?
                                                        <div className="container row row-left">
                                                            {produit.nom_article} ( {item.quantite} ) = {item.quantite * produit.prix_article}
                                                        </div>
                                                        : ""
                                                ))
                                            ))
                                        }
                                    </div>
                                    <div style={{ borderBottom: "1px solid black", padding: "10px 0px" }} className="container row row-left">
                                        Total = {commande.total_commande} CFA
                                    </div>
                                    <div style={{ padding: "10px 0px" }} className="container row">
                                        <button onClick={(e) => { deleteCommande(e, commande.id) }} className="action-btn action-btn-danger"> Supprimer la commande </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default Commande
