import { initBurger } from "./partials/icon_burger.js";
import { darkLight } from "./partials/dark_light.js";

/************************************************************************************/
/** Fonction pour que le header et le footer puisse se répéter sur toutes les pages */
/************************************************************************************/

// Permet de pouvoir faire des import/include de fichiers "html"
function loadHTML(selector, url, callback) {
  // Fait une requête HTTP "GET" vers "url"
  fetch(url)
    // Transform la réponse en texte (ici du html)
    .then((response) => response.text())
    .then((data) => {
      const sections = document.querySelectorAll(selector);

      sections.forEach((section) => {
        section.innerHTML = data;

        // Permet d'appeler une fonction après insertion du HTML
        if (callback) callback();
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header", "/include/partials/header.html", () => {
    initBurger()
    darkLight()
  });
  loadHTML("footer", "/include/partials/footer.html");
});
