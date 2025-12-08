import { jsonFunction } from "/js/utils/jsonFunction.js";
import { createPersonnages } from "/js/personnages/personnages.js";

/*****************************************************/
/********** Background du slider + défilement ********/
/*****************************************************/

/** On va aller initialiser les variables dont on a besoin */
/** On va chercher les icones */
const iconLeft = document.getElementById("iconLeft");
const iconRight = document.getElementById("iconRight");

/** On récupère les images */
const imagesSliderDOM = document.querySelectorAll(".slider_image");

/** On récupère le chemin des images */
const sliderImage = [
  "images/background/dora/background_dora2.avif",
  "images/background/patPatrouille/background_patPatrouille.avif",
  "images/background/dinosaures/background_dino.avif",
];
/** On récupère le texte dans 'alt' */
const sliderText = [
  "Image de Dora et de Babouche",
  "Image de toute l'équipe de PatPatrouille",
  "Image de plusieurs dinosaures",
];
/** On récupère l'id */
const sliderId = ["img1", "img2", "img3"];

// const slider = [
//        { id : "img1", url : "", txt : "" },
//        { id : "img2", url : "", txt : ""},
//        { id : "img3", url : "", txt : ""}
// ]

/*****************************************************/
/********** Affichage différents personnages *********/
/*****************************************************/
const data = await jsonFunction();
/** Différents tableaux dont on a besoin */
/** Tableau Pat Patrouille */
const tabPatPatrouille = data.patPatrouille;
/** Tableau Dora */
const tabDora = data.dora;
/** Tableau Dino */
const tabDino = data.dino;
/** On créé un tableau généralavec les autres tableaux */
const tabThemeAll = [tabDora, tabPatPatrouille, tabDino];
/** Et on récupère l'élément parent */
const persoContainer = document.querySelector(".persoContainer");
/** Tab pour les titres des persos */
const tabTitlePerso = ["Dora", "Pat Patrouille", "Dinosaures"];
/** Variable pour le bouton */
const buttonPerso = document.getElementById("button_perso");
/** On va modifier le titre pour les persos */
const title = document.querySelector(".title2");

/** Permet d'afficher le thème par défaut */
let persoAAfficher = tabPatPatrouille;
if (title) {
  title.textContent = `Pat Patrouille`;
}
if (persoContainer) {
  /** On vide persoContainer au cas où */
  persoContainer.innerHTML = "";
}
/** On fait la fonction pour afficher les 8 premiers éléments */
createPersonnages(persoAAfficher, 0, 8);
/** Et ici, c'est s'il y a le bouton */
if (buttonPerso) {
  buttonPerso.addEventListener("click", () => {
    createPersonnages(persoAAfficher, 8, 18);
    buttonPerso.classList.add("active");
  });
}

/** On met numero = 1 car image Patpatrouille commence à 1 (dora avant) */
let numero = 1;

if (iconLeft) {
  iconLeft.addEventListener("click", () => refreshCarousel(-1));
}

if (iconRight) {
  iconRight.addEventListener("click", () => refreshCarousel(1));
}

function refreshCarousel(direction) {
  numero += direction;

  /** Si + petit que 0, image + élevée du tableau s'affiche */
  if (numero < 0) numero = sliderImage.length - 1;

  /** Si + grand que le nombre d'image du tableau, image 0 apparait */
  if (numero > sliderImage.length - 1) numero = 0;

  /** Permet de mettre (numero - 1) dans une variable */
  let previousIndex = numero - 1;
  /** Permet de mettre (numero + 1) dans une variable */
  let nextIndex = numero + 1;

  /** Permet que si previousNext + petit que 0, image + élevée du tableau s'affiche  */
  if (previousIndex < 0) previousIndex = sliderImage.length - 1;

  /** Permet que si nextIndex + grand que nombre d'images du tableau, on affiche l'image avec index 0 */
  if (nextIndex > sliderImage.length - 1) nextIndex = 0;

  const indices = [previousIndex, numero, nextIndex];

  imagesSliderDOM.forEach((element, index) => {
    element.src = sliderImage[indices[index]]; //slider[indices[index]].url
    element.alt = sliderText[indices[index]]; //slider[indices[index]].txt
    element.id = sliderId[indices[index]]; //slider[indices[index]].id
  });

  /** On choisit les perso à afficher */
  persoAAfficher = tabThemeAll[numero];
  // On vide le container
  persoContainer.innerHTML = "";
  title.innerHTML = "";
  title.textContent = tabTitlePerso[numero];
  buttonPerso.classList.remove("active");
  // On crée une carte pour chaque perso
  createPersonnages(persoAAfficher, 0, 8);
}
