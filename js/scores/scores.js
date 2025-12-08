/*********************************************************/
/********** JS qui permet de récupérer les scores ********/
/*********************************************************/

function scores() {
  /** On récupère le nombre de parties gagnées Dora*/
  let gameDora = localStorage.getItem("scoreDora");
  /** On récupère le nombre de parties gagnées pat Patrouille*/
  let gamePatPatrouille = localStorage.getItem("scorePatrouille");
  /** On récupère le nombre de parties gagnées Dino*/
  let gameDino = localStorage.getItem("scoreDino");

  /** On récupère le span Dora*/
  let winScoreDora = document.querySelector(".scoreDora");
  /** On récupère le span Pat Patrouille*/
  let winScorePatPatrouille = document.querySelector(".scorePatPatrouille");
  /** Création d'un autre span */
  let winScoreDino = document.querySelector(".scoreDino");

  if (!gameDora) {
    winScoreDora.textContent = `0`;
  } else {
    winScoreDora.textContent = `${gameDora}`;
  }

  if (!gamePatPatrouille) {
    winScorePatPatrouille.textContent = `0`;
  } else {
    winScorePatPatrouille.textContent = ` ${gamePatPatrouille}`;
  }

  if (!gameDino) {
    winScoreDino.textContent = `0`;
  } else {
    winScoreDino.textContent = `${gameDino}`;
  }

  /** On récupère le bouton */
  const buttonScore = document.getElementById("buttonScore");

  buttonScore.addEventListener("click", () => {
    /** On vide le localStorage */
    localStorage.clear();

    /** On va créer un élément pour avertir que le localStrorage est bien réinitialisé */
    let warning_text = document.querySelector(".warning_text");

    if (!warning_text) {
      warning_text = document.createElement("p");
      warning_text.classList.add("warning_text");
      warning_text.textContent = `Vos scores ont bien été réinitialisé !!!`;
      buttonScore.insertAdjacentElement("beforebegin", warning_text);
    }

    /** On va vider les points des spans */
    const spanScores = document.querySelectorAll(".scores");
    console.log(spanScores);

    spanScores.forEach((element) => {
      element.textContent = `0`;
    });
  });
}

scores();
