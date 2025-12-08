/** On va initialiser les variables dont on a besoin */

/** On récupère le bouton */
const button = document.getElementById("button");

/** On reprend le h1 */
const title = document.getElementById("title");

/** On récupère le background */
const gameImage = document.querySelector(".game_image");

/** On récupère la section parente */
const sectionGame = document.querySelector(".section_game");

if(button) {
    button.addEventListener("click", () => {
    /** On supprime le titre */
    title.remove();
    /** On supprime cette partie pour enlever le background */
    gameImage.remove();
    })
}
