/*****************************************************/
/**************  Permet de faire le timer  ***********/
/*****************************************************/

/** Normalement le timer se lancera qd on cliquera sur le bouton 'play' ==> voir avec Raph ===> je suis occupée */

/** Le timer s'arretera qd la partie est finie (pas nécessaire d'avoir un bouton "stop") */

/** On récupère les variables dont on a besoin */
const counter = document.getElementById("counter");

let heures = 0;
let minutes = 0;
let secondes = 0;

/** Qd on voudra demarrer le chrono, on passera cette variable à false */
let isStop = true;

/** Fonction pour démarrer le chrono */
export function startTimer() {
  if (isStop) {
    isStop = false;
    isGoingTime();
  }
}

/** Fonciton pour arrêter le chrono */
export function stopTimer() {
  if (!isStop) {
    isStop = true;
  }
}

function isGoingTime() {
  /** Si on est arrêté, on peut pas faire défiler le temps */
  if (isStop) return;

  /** On va convertir en number pour être sure de pouvoir incrémenter */
  heures = parseInt(heures);
  minutes = parseInt(minutes);
  secondes = parseInt(secondes);

  /** On incrémente déjà les secondes */
  secondes++;

  /** Si secondes = 60, alors 1 minute */
  if (secondes === 60) {
    minutes++;
    secondes = 0;
  }

  /** Si minutes = 60, alors, alors 1 heure */
  if (minutes === 60) {
    heures++;
    minutes = 0;
  }

  /** Si secondes < 10 */
  /** On veut afficher un 1 devant (2 chiffres) */
  if (secondes < 10) {
    secondes = "0" + secondes;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (heures < 10) {
    heures = "0" + heures;
  }

  /** On va intégrer les valeurs */
  /** Les heures */
  counter.textContent = `${heures} : ${minutes} : ${secondes}`;

  /** On veut que 'isGoingTime' se déclenche toutes les secondes(1000ms) */
  setTimeout(isGoingTime, 1000);

  // autre façon de faire
  // Avoir juste un total de scondes écoulées
  // Ne calculer les heures, minutes et secondes qu'au moment de l'affichage
  // minutes = Math.floor(totalSecondes / 60)
  // secondes = totalSecondes % 60
  // heures = Math.floot(minutes / 60)
  // minutes = minutes % 60
  // counter.textContent = `${heures.toString().padStart(2, '0') } : ${minutes.toString().padStart(2, '0')} : ${secondes.toString().padStart(2, '0')}`;
}
