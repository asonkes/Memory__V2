/******************************************************************/
/*** Permet d'afficher le contenu dans le tableau des scores ******/
/******************************************************************/

const tableResponsive = document.querySelector(".table-responsive");

/** Ici je vais récupérer tous les éléments avec la class (mode facile) */
const easy = document.querySelectorAll("tbody .easy");
easy.forEach((element) => {
  element.dataset.label = "easy";
});

/** Ici je vais récupérer tous les éléments avec la class (mode Moyen) */
const medium = document.querySelectorAll("tbody .medium");
medium.forEach((element) => {
  element.dataset.label = "medium";
});

/** Ici je vais récupérer tous les éléments avec la class (mode Difficle) */
const hard = document.querySelectorAll("tbody .hard");
hard.forEach((element) => {
  element.dataset.label = "hard";
});
