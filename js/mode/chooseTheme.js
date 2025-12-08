/*****************************************************/
/*** Click sur image slider, change bg page Play *****/
/*****************************************************/

/** Différentes images du slider */ 
const imagesSlider = document.querySelectorAll(".slider_image");

/** Injection de différentes classes pour afficher thème choisit */
const gameImage = document.querySelector(".game_image");

if(imagesSlider) {
    imagesSlider.forEach(element => {
    element.addEventListener("click", () => {
        if(element.id) {
            localStorage.setItem("backgroundId", element.id);
        }
        })
    })
}

let idImage = localStorage.getItem("backgroundId");

if(idImage && gameImage) {
    // Et ici on ajoute l'id
    gameImage.dataset.id = idImage;
}

/******************************************** */
/***** Suppression et modifications texte *****/
/******************************************** */
/** On va ici changer le texte au click */

/** On récupère les boutons du choix de mode */
const buttons = document.querySelectorAll(".button_mode");

/** On reprend le h1 */
const title = document.getElementById("title");

/** On change le texte */
buttons.forEach(element => {
    element.addEventListener("click", () => {
        title.textContent = `Appuie sur le bouton pour jouer.`;
    })
})