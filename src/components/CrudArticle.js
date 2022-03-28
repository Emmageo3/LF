import React, { useEffect, useState } from 'react'
import axios from "axios";
import notloading from "././../assets/models/notloading.webp";
import remove from "././../assets/icons/delete_white.png";
import save from "././../assets/icons/save_white.png";

function CrudArticle() {

    const [refresh, setRefresh] = useState(true)

    const [totalCtg, settotalCtg] = useState([])
    const [loadCtg, setLoadCtg] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setLoadCtg(true);
            try {
                const { data: response } = await axios.get('https://lafrancoise221.com/categorie');
                settotalCtg(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoadCtg(false);
        }
        setRefresh(false);
        fetchData();
    }, [refresh]);

    const [sousctg, setSousctg] = useState([]);
    const [loadSctg, setLoadSctg] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setLoadSctg(true);
            try {
                const { data: response } = await axios.get('https://lafrancoise221.com/sous_categorie');
                setSousctg(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoadSctg(false);
        }
        setRefresh(false);
        fetchData();
    }, [refresh]);

    const [collec, setCollec] = useState([]);
    const [loadCol, setLoadCol] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setLoadCol(true);
            try {
                const { data: response } = await axios.get('https://lafrancoise221.com/collection');
                setCollec(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoadCol(false);
        }
        setRefresh(false);
        fetchData();
    }, [refresh]);

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('https://lafrancoise221.com/article');
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        setRefresh(false);
        fetchData();
    }, [refresh]);

    /* **************************************************************** */

    /* Input values states */
    const [nom, setNom] = useState("");
    const [prix, setPrix] = useState(0);

    const [definectg, setDefinectg] = useState(0);
    const [definesctg, setDefinesctg] = useState(0);
    const [definecol, setDefinecol] = useState(0);

    const [desc, setDesc] = useState("");
    const [url, setUrl] = useState("");

    function ajouterArticle(e) {
        if (definectg === 0)
            setDefinectg(5);

        if (definecol === 0)
            setDefinectg(8);

        e.preventDefault();
        axios.post('https://www.lafrancoise221.com/article', {
            nom_article: nom,
            prix_article: prix,
            url_img_article: url,
            id_categorie: definectg,
            id_collection: definecol,
            id_sous_categorie: definesctg,
            description: desc
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });

        setRefresh(true);
    }

    /* **************************************************************** */

    function supprimerArticle(e, id) {
        e.preventDefault();
        axios.delete(`https://lafrancoise221.com/article/${id}`);
        setRefresh(true);
    }

    /* **************************************************************** */
    function updateArticle(e, id) {
        e.preventDefault();
        /*         const url = 'https://lafrancoise221.com/article/' + id
                axios.put(url, {
                    nom_article: name,
                    prix_article: price,
                    url_img_article: imageurl,
                    id_categorie: ctg,
                    id_collection: 0,
                    description: description
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                }); */

        setRefresh(true);
    }

    return (
        <div className="container column" id="ctg-action">
            <header className="container row row-between title">
                <h3>Gestion des Articles</h3>
            </header>
            {loadCol ? <div>
                loading collection...
            </div>
                : loadCtg ? <div>
                    Loading categories
                </div>
                    : loadSctg ? <div>
                        Loading sous categories
                    </div>
                        :
                        <div className="container column action" id="crud-article">
                            <form id="add-ctg" className="container row row-top row-left">
                                <div className="col-12 col-md-5 row row-left">
                                    <input onChange={ev => setNom(ev.target.value)} className="admin-input col-5" type="text" name="libelle" placeholder="Nom" required />
                                    <input onChange={ev => setPrix(parseInt(ev.target.value))} className="admin-input col-4" type="number" name="prix" placeholder="Prix" min="0" required />
                                </div>
                                <div className="col-12 col-md-6 row row-left">
                                    <select onChange={ev => setDefinectg(parseInt(ev.target.value))} className="admin-input col-3">
                                        <option disabled selected value> CTG </option>
                                        {
                                            totalCtg.map((ctg) => (
                                                <option key={ctg.id} value={ctg.id}>{ctg.nom_categorie}</option>
                                            ))
                                        }
                                    </select>
                                    <select onChange={ev => setDefinesctg(parseInt(ev.target.value))} className="admin-input col-3">
                                        <option disabled selected value> SCTG </option>
                                        {
                                            definectg === 0 ?
                                                sousctg.map((sctg) => (
                                                    sctg.id_categorie === totalCtg[0].id &&
                                                    <option key={sctg.id} value={sctg.id}>{sctg.nom_sous_categorie}</option>
                                                ))
                                                :
                                                sousctg.map((sctg) => (
                                                    sctg.id_categorie === definectg &&
                                                    <option key={sctg.id} value={sctg.id}>{sctg.nom_sous_categorie}</option>
                                                ))
                                        }
                                    </select>
                                    <select onChange={ev => setDefinecol(parseInt(ev.target.value))} className="admin-input col-3">
                                        <option disabled selected value> COL </option>
                                        {
                                            collec.map((col) => (
                                                <option key={col.id} value={col.id}>{col.nom_collection}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="row row-left col-12 col-md-5">
                                    <textarea onChange={ev => setDesc(ev.target.value)} className="admin-input container" placeholder="Description" id="article-description-add"></textarea>
                                </div>
                                <div className="row row-left col-12 col-md-5">
                                    <input onChange={ev => setUrl(ev.target.value)} placeholder='URL Image' className="admin-input" id="article-img-add" type="text" />
                                </div>
                                <div className="container row row-left">
                                    <button onClick={(e) => { ajouterArticle(e) }} className="action-btn action-btn-success"> Créer</button>
                                    <button onClick={() => { setRefresh(true) }} className="action-btn action-btn-primary"> Rafraichir</button>

                                </div>
                            </form>
                        </div>
            }
            <div className="column container admin-list">
                <header className="ligne container row row-left">
                    <div className="col-12 row">
                        Liste articles
                    </div>
                </header>
                <div style={{ fontSize: "0.85rem" }} className="container row-top row">
                    {loading && <div>Loading...</div>}
                    {!loading && (
                        data.map((element) => (
                            <div key={element.id} style={{ border: "1px solid black", textAlign: "left", marginBottom: "5px", borderRadius: "5px" }} className="card column column-top">
                                <img className="container" src={element.url_img_article ? element.url_img_article : notloading} alt={element.nom_article} />
                                <div style={{ padding: "5px", textAlign: "left", borderBottom: "1px solid rgba(0, 0, 0, 0.4)" }} className="container row row-left">
                                    <input className="admin-input" type="text" defaultValue={element.nom_article} />
                                </div>
                                <div style={{ padding: "5px", textAlign: "left", borderBottom: "1px solid rgba(0, 0, 0, 0.4)" }} className="container row row-left">
                                    <select className="admin-input col-3">
                                        {totalCtg.map((ctg) => (
                                            ctg.id === element.id_categorie ?
                                                <option selected key={ctg.id} value={ctg.id}>{ctg.nom_categorie}</option>
                                                : <option key={ctg.id} value={ctg.id}>{ctg.nom_categorie}</option>
                                        ))}
                                    </select>
                                </div>
                                <div style={{ padding: "5px", textAlign: "left", borderBottom: "1px solid rgba(0, 0, 0, 0.4)" }} className="container row row-left">
                                    <select className="admin-input col-3">
                                        {sousctg.map((sctg) => (
                                            sctg.id_categorie === element.id_categorie ?
                                                sctg.id === element.id_sous_categorie ?
                                                    <option selected key={sctg.id} value={sctg.id}>{sctg.nom_sous_categorie}</option>
                                                    : <option key={sctg.id} value={sctg.id}>{sctg.nom_sous_categorie}</option>
                                                : ""
                                        ))}
                                    </select>
                                </div>
                                <div style={{ padding: "5px", textAlign: "left", borderBottom: "1px solid rgba(0, 0, 0, 0.4)" }} className="container row row-left">
                                    <select className="admin-input col-3">
                                        {collec.map((col) => (
                                            col.id === element.id_collection ?
                                                <option selected key={col.id} value={col.id}>{col.nom_collection}</option>
                                                : <option key={col.id} value={col.id}>{col.nom_collection}</option>
                                        ))}
                                    </select>
                                </div>
                                <div style={{ padding: "5px", textAlign: "left", borderBottom: "1px solid rgba(0, 0, 0, 0.4)" }} className="container row row-left">
                                    <input className="admin-input" type="text" defaultValue={element.prix_article} />
                                </div>
                                <div style={{ padding: "5px", textAlign: "left" }} className="container row row-left">
                                    <textarea className="container admin-input" >{element.description}</textarea>
                                </div>
                                <div className="container row row-between">
                                    <button onClick={(e) => { supprimerArticle(e, element.id) }} className="action-btn action-btn-danger"> <img width="20" src={remove} alt="delete" /> </button>
                                    <button onClick={(e) => { updateArticle(e, element.id) }} className="action-btn action-btn-success"> <img width="20" src={save} alt="save" /> </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default CrudArticle
