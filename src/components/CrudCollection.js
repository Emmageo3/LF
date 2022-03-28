import React, { useEffect, useState } from 'react'
import axios from "axios";
import edit from "./../assets/icons/edit.png";
import remove from "./../assets/icons/delete.png";

function CrudCollection() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('https://lafrancoise221.com/collection');
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        setRefresh(false)
        fetchData();
    }, [refresh]);

    const [create, setCreate] = useState("");

    function ajouterCtg(e) {
        e.preventDefault();
        axios.post('https://lafrancoise221.com/collection', {
            nom_collection: create,
        })
        setRefresh(true);
    }

    function deleteCtg(e, ctg_id) {
        e.preventDefault();
        axios.delete(`https://lafrancoise221.com/collection/${ctg_id}`);
        setRefresh(true);
    }

    const [rename, setRename] = useState("")

    function renameCtg(e, ctg_id) {
        e.preventDefault();
        let ctg_name = rename;
        axios.put(`https://lafrancoise221.com/collection/${ctg_id}`, {
            nom_collection: ctg_name,
        });
        setRefresh(true);
    }
    return (

        <div className="container column" id="ctg-action">
            <header className="container row row-between title">
                <h3> Gestion des collections</h3>
            </header>
            <div className="container column action" id="crud-ctg">
                <form id="add-ctg" className="container row row-left">
                    <input className="admin-input" onChange={ev => setCreate(ev.target.value)} type="text" name="libelle" placeholder="Nouvelle collection" />
                    <button className="action-btn action-btn-success" onClick={(e) => { ajouterCtg(e) }}> + </button>
                    <img title="Rafraichir" style={{ backgroundColor: "var(--white-color)", margin: "5px", padding: "5px", borderRadius: "100%", cursor: "pointer"}} onClick={() => { setRefresh(true) }} src="https://img.icons8.com/dotty/20/000000/refresh.png" alt="refresh  btn" />
                </form>
            </div>
            <div className="column container admin-list">
                <header className="ligne container row row-left">
                    <div className="col-4 row row-left">
                        Libelle
                    </div>
                    <div className="col-7 row row-left">
                        Renommer
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
                                {element.nom_collection}
                            </div>
                            <div className="col-7 row row-left">
                                <input className="admin-input" onChange={ev => setRename(ev.target.value)} style={{ border: "1px solid #707070", width: "fit-content", marginRight: "3px" }} type="text" placeholder="New name" /> <img onClick={(e) => { renameCtg(e, element.id) }} title="Renommer" style={{ cursor: "pointer" }} width="15" src={edit} alt="Edit" />
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

export default CrudCollection
