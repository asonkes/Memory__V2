import { stopTimer } from "/js/utils/timer.js";
import { startPlaySound } from "/js/utils/playSound.js";

/*****************************************************/
/*** Permet de voir si les cartes correspondent ******/
/*****************************************************/
export function returnCards() {
  const cardBlock = document.querySelectorAll(".cardBlock");

  /** Pour la 1ere card */
  let firstCard = null;
  /** Pour la 2eme card */
  let secondCard = null;
  /** Déclaré à false, donc si true fonction flipCard ne se fera pas */
  let lockGame = false;
  /** On met le nombre de partie a 0 par défaut */
  let isWin = 0;
  /**  On déclare si carte trouvé */
  let isCardValid = 0;
  /** On va définir le thème */
  let theme = localStorage.getItem("backgroundId");

  const themes = [
    {id: "theme1", sound: "/sounds/dora_sound.wav", src: "/images/cards/dora/dora.png", alt: "Image de Dora."},
    {id: "theme2", sound: "/sounds/patPatrouille_sound.wav", src: "/images/cards/patPatrouille/chase.png", alt: "Image de chase dans Pat Patrouille"},
    {id: "theme3", sound: "/sounds/dino_sound.mp3", src: "/images/cards/dinosaures/triceratops.png", alt: "Image d'un triceratops."}
  ]

  function flipCard(element) {
    /** lockBoard return, on sort du jeu */
    if (lockGame) return;

    /** si on reclique sur firstCard, on sort de flipCard */
    if (element === firstCard) return;
    /** On ajoute la classe pour le flip */
    element.classList.add("returnCard");

    /** Si la carte n'est pas la 1ere */
    if (!firstCard) {
      firstCard = element;
      return;
    }

    /** Pour avoir la 2eme card */
    secondCard = element;

    /** On bloque les clics */
    lockGame = true;

    /** Ca c'est la partie qd 1 carte = 1 carte (paaire de carte trouvée) */
    if (firstCard.dataset.value === secondCard.dataset.value) {
      /** On rajoute +1 au nombre de paire trouvée */
      isCardValid++;

      /** On va trouver les éléments en fonction du thème */
      const currentTheme = themes.find(element => element.id === theme);
      
      if(currentTheme) {
        /** On démarre le son */
        startPlaySound(currentTheme.sound);
      }

      /** Quand le nombre de cartes trouvées = nombre de cartes existantes / 2 */
      if (isCardValid === cardBlock.length / 2) {
        /** On va flouter les cards */
        const cardBlock = document.querySelector(".card");
        cardBlock.classList.add("finish");

        /** Et on va ajouter un texte pour dire "bravo", vous avez gagné */
        const textFinish = document.createElement("div");
        textFinish.classList.add("textFinish");
        textFinish.textContent = `Félicitations !!!​`;
        cardBlock.insertAdjacentElement("afterend", textFinish);

        /** On arrête le timer quand toutes les cartes sont trouvées */
        stopTimer();

        /** On détermine en fonciton du thème */
        if (currentTheme) {
          /** On va ajouter une image en fonction du texte */
          const img = document.createElement("img");
          img.src = currentTheme.src;
          img.alt = currentTheme.alt;

          const text = document.createElement("p");
          text.textContent = `Tu viens de remporter une partie🏆​ !!!`;

          const text2 = document.createElement("p");
          text2.textContent = `Tu es une(e) véritable champion(ne) 🌟​.`;
          textFinish.append(img, text, text2);

          /** Partie gagnées +1 */
          isWin++;

          /** S'il y a déjà un nombre enregistré en localstorage pour ce thème */
          // On transforme en 'nombre' car localStorage stocke sous forme de 'string' 
          let score = Number(localStorage.getItem(theme)) || 0;
          // Et donc on peut faire 1 + 1 ==> puisque nombre
          localStorage.setItem(theme, score + 1);
        }

        /** On récupère le bouton pour rejouer pour le faire apparaitre */
        const buttonParent = document.querySelector(".buttonParent");
        buttonParent.classList.add("active");
      }

      resetCards();
    } else {
      /** timeout permet de pouvoir voir la 2eme carte après le clic,
       * Au sinon classe est remove direct
       */
      setTimeout(() => {
        firstCard.classList.remove("returnCard");
        secondCard.classList.remove("returnCard");

        resetCards();
      }, 1000);
    }
  }

  cardBlock.forEach((card) => {
    card.classList.add("active");
    card.addEventListener("click", () => flipCard(card));
  });

  function resetCards() {
    firstCard = null;
    secondCard = null;
    lockGame = false;
  }
}
