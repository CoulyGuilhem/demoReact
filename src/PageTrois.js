import React from "react";
import {useLocation} from "react-router-dom";

function PageTrois() {
    let location = useLocation();
    console.log(location)
    return (
        <div>
            <h1>PAGE TROIS</h1>
            {/* location.state contient la donnée passée dans la page deux (soit slug)*/}
            <div>state passée: {location.state}</div>
        </div>
    )
}

export default PageTrois;
