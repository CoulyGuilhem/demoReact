import React from "react";
import './App.css';
import PageUne from "./PageUne";
import PageDeux from "./PageDeux";
import PageTrois from "./PageTrois";
import Page404 from "./Page404";
import Navigation from "./Navigation.js"
import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";

function App() {
    function HandleClick() {
        let navigate = useNavigate()
        navigate(-1)
    }

    return (
        <div className="App">
            {/* Permet de creer un router
              forceRefresh permet de donner un effet de refresh de la page*/}
            <Router forceRefresh={true}>
                <Navigation/>
                <Routes>

                    {/* Route par defaut : Affiche l'element PageUne */}
                    <Route path="/" exact={true} element={<PageUne/>}/>

                    {/* Route qui s'obtient en rajoutant /PageDeux : Affiche l'element PageDeux */}
                    <Route path="/PageDeux" element={<PageDeux/>}/>

                    <Route path="/PageDeux/:slug" element={<PageDeux/>}/>
                    {/* Similaire à PageDeux mais avec PageTrois */}
                    <Route path="/PageTrois" element={<PageTrois/>}/>

                    {/* path='*' permet de gerer toutes les routes non specifiée en dessous
                        Dans notre cas il s'agit de la gestion de l'erreur 404*/}
                    <Route path='*' element={<Page404/>}/>
                    }/>
                </Routes>
            </Router>
        </div>
    );
}


export default App;
