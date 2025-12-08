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
  /** Récupération du score de Dora */
  let scoreDora = localStorage.getItem("scoreDora");
  /** Récupération du score de patPatrouille */
  let scorePatPatrouille = localStorage.getItem("scorePatrouille");
  /** Récupération du score de Dino */
  let scoreDino = localStorage.getItem("scoreDino");

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

      /** On va lancer les différents sons par thème */
      /** Si thème Dora */
      if (theme === "img1") {
        startPlaySound("/sounds/dora_sound.wav");
      }

      /** Si thème Pat Patrouille */
      if (theme === "img2") {
        startPlaySound("/sounds/patPatrouille_sound.wav");
      }

      /** Si thème Dinosaures */
      if (theme === "img3") {
        startPlaySound("/sounds/dino_sound.mp3");
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

        /** Si thème = Dora */
        if (theme === "img1") {
          /** On va ajouter une image en fonction du texte */
          const img = document.createElement("img");
          img.src = `/images/cards/dora/dora.png`;
          img.alt = `Image de Dora.`;

          const text = document.createElement("p");
          text.textContent = `Tu viens de remporter une partie🏆​ !!!`;

          const text2 = document.createElement("p");
          text2.textContent = `Tu es une(e) véritable champion(ne) 🌟​.`;
          textFinish.append(img, text, text2);

          /** Partie gagnées +1 */
          isWin++;
          /** S'il y a déjà un nombre enregistré en localstorage pour ce thème */
          if (scoreDora) {
            /** On reprend ce nombre et on rajoute +1 */
            scoreDora = localStorage.getItem("scoreDora") + isWin++;
          }
          /** Et on envoie la nouvelle valeur */
          scoreDora = localStorage.setItem("scoreDora", isWin);
        }

        /** Si theme = pat Patrouille */
        if (theme === "img2") {
          /** On va ajouter une image en fonction du texte */
          const img = document.createElement("img");
          img.src = `/images/cards/patPatrouille/chase.png`;
          img.alt = `Image de chase dans Pat Patrouille`;

          const text = document.createElement("p");
          text.textContent = `Tu viens de remporter une partie🏆​ !!!`;

          const text2 = document.createElement("p");
          text2.textContent = `Tu es une(e) véritable champion(ne) 🌟​.`;

          textFinish.append(img, text, text2);

          /** Partie gagnées +1 */
          isWin++;
          /** S'il y a déjà un nombre enregistré en localstorage pour ce thème */
          if (scorePatPatrouille) {
            /** On reprend ce nombre et on rajoute +1 */
            scorePatPatrouille =
              localStorage.getItem("scorePatrouille") + isWin++;
          }
          /** Et on envoie la nouvelle valeur */
          scorePatPatrouille = localStorage.setItem("scorePatrouille", isWin);
        }

        /** Si thème est Dinosaures */
        if (theme === "img3") {
          /** On va ajouter une image en fonction du texte */
          const img = document.createElement("img");
          img.src = `/images/cards/dinosaures/triceratops.png`;
          img.alt = `Image d'un triceratops.`;

          const text = document.createElement("p");
          text.textContent = `Tu viens de remporter une partie🏆​ !!!`;

          const text2 = document.createElement("p");
          text2.textContent = `Tu es une(e) véritable champion(ne) 🌟​.`;
          textFinish.append(img, text, text2);

          /** Partie gagnées +1 */
          isWin++;
          /** S'il y a déjà un nombre enregistré en localstorage pour ce thème */
          if (scoreDino) {
            /** On reprend ce nombre et on rajoute +1 */
            scoreDino = localStorage.getItem("scoreDino") + isWin++;
          }
          /** Et on envoie la nouvelle valeur */
          scoreDino = localStorage.setItem("scoreDino", isWin);
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
