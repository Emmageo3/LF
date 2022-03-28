import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import Panier from "./pages/Panier";
import Admin from "./pages/Admin";
import ScrollToTop from "./components/ScrollToTop";
import Errorhttp from "./pages/Errorhttp";
import Search from "./components/Search";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import React from "react";
import "./styles/francoise.css";
function App() {
  return (
    <div id="fr-app">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/sugar-paper" exact>
            <Home />
          </Route>
          <Route path="/panier" exact>
            <Panier />
          </Route>
          <Route path="/admin" exact>
            <Admin />
          </Route>
          <Route path="/search/:name" exact>
            <Search />
          </Route>
          <Route path="/catalogue/:name" exact>
            <Catalogue />
          </Route>
          <Route path="/">
            <Errorhttp />
          </Route>
        </Switch>
        <ScrollToTop />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
