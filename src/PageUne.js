import React from "react";
import {useNavigate,useLocation} from "react-router-dom";



function PageUne() {
    let navigate = useNavigate();

    return (
        <div>
            <h1>PAGE UNE</h1>
            <button onClick={() => navigate('/PageDeux')}>Navigate Page 2</button>
        </div>
    )
}

export default PageUne;
