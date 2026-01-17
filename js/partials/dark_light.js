/*****************************************************/
/************ Création du mode jour/nuit *************/
/*****************************************************/

/** Header variables pour changer 'dark' en 'light' */

export function darkLight() {
  const dark = document.getElementById("dark");
  const light = document.getElementById("light");
  const body = document.querySelector("body");

  /** On récupère le mode choisit par l'utilisateur */
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  /** Mode clair */
  if(!prefersDark) {
    body.classList.remove("dark");
  } else {
    /** Par défaut je mets le mode 'sombre' sans évènement au click */
    body.classList.add("dark");
    /** On doit changer les icônes du menu header */
    dark.classList.add("active");
    light.classList.add("active");
  }

  /** Réaction au changement du système (sans reload) */
  prefersDark.addEventListener("change", (event) => {
    if(event.maches) {
      body.classList.add("dark");
      dark.classList.add("active");
      light.classList.add("active");
    } else {
      body.classList.remove("dark");
      /** On doit changer les icônes du menu header */
      dark.classList.remove("active");
      light.classList.remove("active");
    }
  });

  /** Réaction au click */
  dark.addEventListener("click", () => {
    body.classList.add("dark");
    dark.classList.add("active");
    light.classList.add("active");
  });

  light.addEventListener("click", () => {
    body.classList.remove("dark");
    dark.classList.remove("active");
    light.classList.remove("active");
  });
}
