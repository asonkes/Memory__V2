import { mixCards } from "/js/utils/mixCards.js";
import { creationBgCards, creationBackCards} from "/js/utils/creationBgCards.js";
import { returnCards } from "/js/utils/returnCards.js";
import { startTimer } from "/js/utils/timer.js";
import { stopPlaySound, reactiveSound } from "/js/utils/playSound.js";

/*****************************************************/
/******* En fonction du mode, quantité de cards ******/
/*****************************************************/

/** Tableau difficile */
let tab = [
  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
  13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18
];

/** Ici on va utiliser un objet (car ordre n'a pas d'importance, valeur = identifiant précis) */
const modeSizes = { easy: 12, medium: 24, hard: 36};

/** On sélectionne tous les boutons */
const buttonsMode = document.querySelectorAll(".button_mode");
/** On sélectionne l'élément chooseMode */
const chooseMode = document.querySelector(".chooseMode");
/** On va intiailiser le container */
const cardWrapper = document.querySelector(".card_wrapper");
/** On récupère le bouton */
const button = document.getElementById("button");
/** On va initialiser le parent de la liste 'card' */
const card = document.querySelector(".card"); 

/*********************************************/
/*** On rassemble les choses que l'on répète */
/******************************************* */
buttonsMode.forEach(element => {

  element.addEventListener("click", () => {
    /** Ajout de classes pour l'affichage des différentes pop-up */
    chooseMode.classList.add("active");
    cardWrapper.classList.add("active");
    button.classList.add("active");

    // On récupère combien de cartes pour ce mode
    const mode = element.dataset.mode;
    const size = modeSizes[mode];
    const array = tab.slice(0, size);

    mixCards(array);
    array.forEach(creationList);
  })
})

/*********************************/
/** Evenement sur le bouton PLAY */
/*********************************/

/** Evenement au click sur le bouton 'GO' */
if (button) {
  button.addEventListener("click", () => {
    /** On reprend le h1 */
    const title = document.getElementById("title");
    /** On supprime le titre */
    title.remove();

    /** On récupère le background */
    const gameImage = document.querySelector(".game_image");
    /** On supprime cette partie pour enlever le background */
    gameImage.remove();

    /** Permet de faire disparaitre le bouton */
    button.classList.remove("active");
    /** On va ajouter le parent */
    const gameCard = document.querySelector(".game_card");
    gameCard.classList.add("active");
    /** On va ajouter une classe sur card */
    card.classList.add("active");

    /** On va ajouter sur 'cardFront' et 'cardBack', des classes au click */
    const cardFront = document.querySelector(".cardFront");
    const cardBack = document.querySelector(".cardBack");

    cardFront.classList.add("active");
    cardBack.classList.add("active");

    /** On va ajouter une classe à timer pour le faire apparaître */
    const timerParent = document.querySelector(".timerParent");
    timerParent.classList.add("active");

    /** On va faire appraître le bouton "sound" et le bouton "mute" */
    const button_mute = document.querySelector(".button_mute");
    button_mute.classList.add("active");
    button_mute.addEventListener("click", () => {
      stopPlaySound();
    })

    const button_sound = document.querySelector(".button_sound");
    button_sound.classList.add("active");
    button_sound.addEventListener("click", () => {
      reactiveSound();
    })

    returnCards();

    /** On va ajouter le timer */
    startTimer();
  });
}

/*************************************************************/
/** Fonction qui permet de globaliser la création d'éléments */
/*************************************************************/

/** Fonction pour créer les 'div'  */
async function creationList(value) {

  /** On va créer tous les div (le block parent */
  const cardBlock = document.createElement("div");
  /** On ajoute une 1ère classe 'cardFront' */
  cardBlock.classList.add("cardBlock");
  /** Ici on met une "value" sur cardBlack */
  cardBlock.dataset.value = value;

  /** On va créer tous les 'front' des cards */
  const cardFront = document.createElement("img");
  /** On va ajouter une classe au span */
  cardFront.classList.add("cardFront");

  /** On va créer les 'back' des cards */
  const cardBack = document.createElement("img");
  /** On va lui ajouter une classe */
  cardBack.classList.add("cardBack");

  cardBlock.append(cardFront, cardBack);
  card.append(cardBlock);

  /** Ici on récupère le thème pour de recto des cards */
  let idImage = localStorage.getItem("backgroundId");
  if(!idImage) return;
  
  creationBgCards(cardFront, cardBack, idImage);

  /** Ici on récupère le thème pour de verso des cards */
  const backCards = await creationBackCards(idImage);
  /** On fait '-1' pour partir de '0' */
  cardBack.src = backCards.cardImage[value - 1];
  cardBack.alt = backCards.cardText[value - 1];
}
