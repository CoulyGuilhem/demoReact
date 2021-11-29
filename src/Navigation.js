import React from "react";
import {Link, NavLink} from "react-router-dom";

function Navigation(){
    return(
        <ul style={{display: 'flex'}}>

            {/*
            className={(navData) => navData.isActive ? "current" : ""}
            Ca permet d'activer un style en fonction de la route
            dans notre cas le style est uniquement actif sur les balises a (NavLink entre autre)
            */}


            <NavLink to="/">
                <li style={{marginLeft: 10, listStyle:'none'}}>PAGE UNE</li>
            </NavLink>
            <NavLink to="/PageDeux">
                <li style={{marginLeft: 10, listStyle:'none'}}>PAGE DEUX</li>
            </NavLink>
            <NavLink to="/PageTrois">
                <li style={{marginLeft: 10, listStyle:'none'}}>PAGE TROIS</li>
            </NavLink>
        </ul>
    )
}

export default Navigation;