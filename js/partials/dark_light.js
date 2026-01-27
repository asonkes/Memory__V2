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

  /** Fonction pour le mode clair */
  const lightMode = () => {
    body.classList.remove("dark");
    dark.classList.remove("active");
    light.classList.remove("active");
    localStorage.setItem("localStorage", "light");
  };

  const darkMode = () => {
    body.classList.add("dark");
    dark.classList.add("active");
    light.classList.add("active");
    localStorage.setItem("localStorage", "dark");
  };

  /** On récupère l'information au chargement */
  window.addEventListener("load", () => {
    let localStorageTheme = localStorage.getItem("localStorage");

    if (!localStorageTheme) {
      prefersDark.matches ? darkMode() : lightMode();
    } else {
      if (localStorageTheme === "dark") {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  /** Réaction si on a déjà chargé sa page et qu'on change de mode (sombre ou clair) */
  prefersDark.addEventListener("change", (event) => {
    // let localStorageTheme = localStorage.getItem("localStorage");

    // if (localStorageTheme === "dark") {
    //   darkMode();
    // } else if (localStorageTheme === "") {
    //   lightMode();
    // } else {
    prefersDark.matches ? darkMode() : lightMode();
    // }
  });

  /** Réaction au click sur les icônes */
  dark.addEventListener("click", () => {
    darkMode();
  });

  light.addEventListener("click", () => {
    lightMode();
  });
}
