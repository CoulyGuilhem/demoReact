import React from "react";
import {useParams,Link} from "react-router-dom";

function PageDeux() {

    let {slug} = useParams()

    return (
        <div>
            <h1>PAGE DEUX</h1>

            {/*slug permet de recuperer du texte depuis l'url (dans ce cas apres le /PageDeux/*/}
            <p> Page deux -> {slug}</p>
            <Link
                to={"/PageTrois"}
                state={slug}> {/* stock une donnée a passer dans le state*/}
                Aller à la page trois avec un state
            </Link>
        </div>
    )
}

export default PageDeux;
