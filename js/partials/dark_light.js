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

  /** Fonction pour le mode sombre */
  const darkLight = body.className;
  console.log(darkLight);

  /** Fonction pour le mode clair */
  const lightMode = () => {
    body.classList.remove("dark");
    dark.classList.remove("active");
    light.classList.remove("active");
    localStorage.setItem("modeServeurChoose", body.className);
  };

  const darkMode = () => {
    body.classList.add("dark");
    dark.classList.add("active");
    light.classList.add("active");
    localStorage.setItem("myCat", "Tom");
  };

  /** On récupère l'information au chargement */
  window.addEventListener("load", () => {
    if (prefersDark.matches) {
      darkMode();
    }
  });

  /** Réaction si on a déjà chargé sa page et qu'on change de mode (sombre ou clair) */
  prefersDark.addEventListener("change", (event) => {
    if (event.matches) {
      darkMode();
    } else {
      lightMode();
    }
  });

  /** Réaction au click sur les icônes */
  dark.addEventListener("click", () => {
    darkMode();
  });

  light.addEventListener("click", () => {
    lightMode();
  });
}
