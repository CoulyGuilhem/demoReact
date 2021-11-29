import {useNavigate} from "react-router-dom";
import React from "react";

function Page404(){
    let navigate = useNavigate();
    return(
        <div>
        <h1>ERREUR 404</h1>
        <button onClick={() => {
            navigate(-1)
        }}>Go back</button>
    </div>
    )
}

export default Page404
