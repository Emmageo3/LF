import React, { useEffect, useState } from 'react'
import axios from "axios"; import "./../styles/client.css";
function Client() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('https://lafrancoise221.com/client');
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        setRefresh(false)
        fetchData();
    }, [refresh]);



    function deleteClient(e) {
        e.preventDefault();
        let client_id = document.getElementById("client-id-delete").value;
        axios.delete(`https://lafrancoise221.com/client/${client_id}`);
        setRefresh(true);
        document.getElementById("client-id-delete").value = "";
        setRefresh(true);
    }
    return (
        <div className="container row row-top" id="clients">
            <header className="container row row-between title">
                <h3>LISTE CLIENTS</h3>
                <img title="Rafraichir" style={{ backgroundColor: "var(--grey-color)", margin: "5px", padding: "5px", borderRadius: "100%", cursor: "pointer", border: "1px solid black" }} onClick={() => { setRefresh(true) }} src="https://img.icons8.com/dotty/20/000000/refresh.png" alt="refresh  btn" />
            </header>
            <div className="container row">
                <form id="delete-client" className="container row row-right">
                    <h4>Supprimer un compte client</h4>
                    <input id="client-id-delete" min="1" type="number" name="id" placeholder="id" />
                    <button className="action-btn action-btn-danger" onClick={(e) => { deleteClient(e) }}> Supprimer</button>
                </form>
            </div>
            <div style={{border: "1px solid black", marginTop: "10px"}} className="container row row-left row-top">
                {loading && <div>Loading...</div>}
                {!loading && (
                    data.map((client) => (
                        <div key={client.id} className="col-12 col-sm-6 col-md-4 col-xl-3 column client-card">
                            <div className="container row row-left">
                                ID : {client.id}
                            </div>
                            <div className="container row row-left">
                                Nom complet : {client.prenom_nom_client}
                            </div>
                            <div className="container row row-left">
                                Mail : {client.email_client}
                            </div>
                            <div className="container row row-left">
                                Telephone : {client.tel_client}
                            </div>
                            <div className="container row row-left">
                                Adresse : {client.adresse_client}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Client
