import React, { useEffect, useState } from 'react'
import axios from "axios";
import edit from "./../assets/icons/edit.png";
import save from "./../assets/icons/save.png";
import remove from "./../assets/icons/delete.png";

function Crudsousctg() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('https://lafrancoise221.com/sous_categorie');
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        setRefresh(false)
        fetchData();
    }, [refresh]);

    const [totalCtg, settotalCtg] = useState([])
    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://lafrancoise221.com/categorie')
            .then(response => settotalCtg(response.data));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [loading]);

    function ajouterCtg(e) {

        e.preventDefault();
        let sous_ctg_name = document.getElementById("sous-ctg-name").value;
        let ctg_id = document.getElementById("sous-category-add").value;

        axios.post('https://lafrancoise221.com/sous_categorie', {
            nom_sous_categorie: sous_ctg_name,
            id_categorie: ctg_id,
        })
        setRefresh(true);
        document.getElementById("sous-ctg-name").value = "";
    }

    function deleteCtg(e, ctg_id) {
        e.preventDefault();
        axios.delete(`https://lafrancoise221.com/sous_categorie/${ctg_id}`);
        setRefresh(true);
    }

    const [ctgID, setCtgID] = useState(0);
    const [sctgName, setSctgName] = useState("");
    function updateCtg(e, id) {
        e.preventDefault();
        if (ctgID === 0) {
            axios.put(`https://lafrancoise221.com/sous_categorie/${id}`, {
                nom_sous_categorie: sctgName,
            });
        }
        else if (sctgName === "") {
            axios.put(`https://lafrancoise221.com/sous_categorie/${id}`, {
                id_categorie: parseInt(ctgID)
            });
        }
        else {
            axios.put(`https://lafrancoise221.com/sous_categorie/${id}`, {
                nom_sous_categorie: sctgName,
                id_categorie: parseInt(ctgID)
            });
        }
        setRefresh(true);
    }
    return (

        <div className="container column" id="ctg-action">
            <header className="container row row-between title">
                <h3>Gestion des Sous Catégories</h3>
            </header>
            <div className="container column action" id="crud-ctg">
                <form id="add-ctg" className="container row row-left">
                    <select className='admin-input' id="sous-category-add" required>
                        <option disabled selected value> CTG </option>
                        {

                            totalCtg.map((ctg) => (
                                <option key={ctg.id} value={ctg.id}>{ctg.nom_categorie}</option>
                            ))
                        }
                    </select>
                    <input className='admin-input' id="sous-ctg-name" type="text" name="libelle" placeholder="Nom Sous Catégorie" />
                    <button className="action-btn action-btn-success" onClick={(e) => { ajouterCtg(e) }}> +</button>
                    <img title="Rafraichir" style={{ backgroundColor: "var(--grey-color)", margin: "5px", padding: "5px", borderRadius: "100%", cursor: "pointer", border: "1px solid black" }} onClick={() => { setRefresh(true) }} src="https://img.icons8.com/dotty/20/000000/refresh.png" alt="refresh  btn" />
                </form>
            </div>
            <div className="column container admin-list">
                <header className="ligne container row row-left">
                    <div className="col-4 row row-left">
                        CTG
                    </div>
                    <div className="col-6 row row-left">
                        Sous CTG
                    </div>
                    <div className="col-1 row row-left">
                        ✅
                    </div>
                    <div className="col-1 row row-left">
                        🗑
                    </div>
                </header>
                {loading && <div>Loading...</div>}
                {!loading && (
                    data.map((element) => (
                        <div key={element.id} className="ligne container row row-left">
                            <div className="col-4 row row-left">
                                <select onChange={ev => { setCtgID(ev.target.value) }} className='admin-input'>
                                    {
                                        totalCtg.map((ctg) => (
                                            ctg.id === element.id_categorie ? <option selected key={ctg.id} value={ctg.id}>{ctg.nom_categorie}</option>
                                                : <option key={ctg.id} value={ctg.id}>{ctg.nom_categorie}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="col-6 row row-left">
                                <input onChange={ev => { setSctgName(ev.target.value) }} className='admin-input' type="text" defaultValue={element.nom_sous_categorie} placeholder='Name' />
                            </div>
                            <div className="col-1 row row-left">
                                <img onClick={(e) => { updateCtg(e, element.id) }} title="Supprimer" style={{ cursor: "pointer" }} width="13" src={save} alt="Remove" />
                            </div>
                            <div className="col-1 row row-left">
                                <img onClick={(e) => { deleteCtg(e, element.id) }} title="Supprimer" style={{ cursor: "pointer" }} width="18" src={remove} alt="Remove" />
                            </div>
                        </div>
                    ))
                )}
            </div>

        </div>
    )
}

export default Crudsousctg
