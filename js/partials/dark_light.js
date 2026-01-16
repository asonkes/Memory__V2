/*****************************************************/
/************ Création du mode jour/nuit *************/
/*****************************************************/

/** Header variables pour changer 'dark' en 'light' */

export function darkLight() {
  const dark = document.getElementById("dark");
  const light = document.getElementById("light");
  const body = document.querySelector("body");

  /**
   * Lien pour voir quel mode l'utilisateur a choisit sur le navigateur
   * Pas avec le JS
   * */
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  console.log(prefersDark);

  /*  if (!prefersDark.matches) */
  /** Maintenant détecté par JS quel mode on a choisit et là enlever ou mettre la classe sur le body !!!  */

  dark.addEventListener("click", (event) => {
    event.preventDefault();

    dark.classList.add("active");
    light.classList.add("active");

    body.classList.add("dark");
  });

  light.addEventListener("click", (event) => {
    event.preventDefault();

    dark.classList.remove("active");
    light.classList.remove("active");

    body.classList.remove("dark");
  });
}
