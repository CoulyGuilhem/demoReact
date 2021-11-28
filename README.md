# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Fonctionnement

App contenant 4 Composant (Navigation,PageUne,PageDeux,PageTrois)

Les routes sont definis par une balise Route avec une variable path indiquant le texte à ajouter à l'url pour afficher l'element
parmis ces path on peut rajouter des variables comme :slug qui correspond au texte en surplus.

Toutes ces routes doivent etre situées dans la balise Routes qui elle meme se situe dans une balise Router (Router correspond a BrowserRouter. Le nom de la balise est renomée dans son import)

Les balises Link et NavLink sont des liens permetant de rediriger le site sur une autre "page" en passant en argument un path correspondant à la route souhaité.

useNavigate est un Hook permetant de creer une fonction pour rediriger sur la bonne page (dans notre cas, c'est utilisé pour la redirection de page du bouton du composant PageUn)

