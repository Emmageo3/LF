import React from "react";
import AdminHome from "./../components/AdminHome";
import { useState } from "react";
import "./../styles/admin.css";

function Admin() {
  const password = "passer";
  const [auth, setAuth] = useState(false);
  const passwordSubmit = (e) => {
    e.preventDefault();
    if (document.getElementById("passwordInput")) {
      let passInput = document.getElementById("passwordInput").value;
      if (passInput === password) {
        return setAuth(!auth);
      }
    }
  };

  return (/* 
    <main className="container column" id="admin">
      {auth ? (
        <AdminHome />
      ) : (
        <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-4 col-xxl-3 column">
          <form className="column" id="admin-form">
            <div className="title container row">
              <h3>Connexion</h3>
            </div>
            <input id="usernameInput" type="password" placeholder="Username" />
            <input id="passwordInput" type="password" placeholder="Password" />
            <br />
            <button className="fr-btn" type="submit" onClick={passwordSubmit}>
              Valider
            </button>
          </form>
        </div>
      )}
    </main> */

    <main className="container column" id="admin">
        <AdminHome />
    </main>
  );
}
export default Admin;
