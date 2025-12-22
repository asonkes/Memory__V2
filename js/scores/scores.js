/*********************************************************/
/********** JS qui permet de récupérer les scores ********/
/*********************************************************/

function scores() {

  // key = la clé utilisée dans le localStorage pour récupérer la donnée
  // selector = pour récupérer le 'span' dans lequel on doit aller mettre le score 
  const scoresConfig = [
    {key: "theme1", selector: ".scoreDora"},
    {key: "theme2", selector: ".scorePatPatrouille"},
    {key: "theme3", selector: ".scoreDino"}
  ]

  scoresConfig.forEach(({key, selector}) => {
    const value = localStorage.getItem(key) || 0;
    const span = document.querySelector(selector);

    if(span) {
      span.textContent = value;
    }
  })

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
