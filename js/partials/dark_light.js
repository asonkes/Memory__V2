/*****************************************************/
/************ Création du mode jour/nuit *************/
/*****************************************************/

/** Header variables pour changer 'dark' en 'light' */

export function darkLight() {
  const dark = document.getElementById("dark");
  const light = document.getElementById("light");
  const body = document.querySelector("body");

  /** Lien pour voir quel mode l'utilisateur a choisit sur le serveur */
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  console.log(prefersDark);

  if (!prefersDark.matches) {
    /** Ici on a choisit le mode clair */
    console.log("mode clair");

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
  } else {
    /** Ici on a choisit le mode sombre */
    console.log("sombre");

    light.addEventListener("click", (event) => {
      console.log("j'ai cliqué sur le bouton");
      event.preventDefault();

      dark.classList.add("active");
      light.classList.add("active");
    });

    dark.addEventListener("click", (event) => {
      event.preventDefault();

      dark.classList.remove("active");
      light.classList.remove("active");
    });
  }
}
