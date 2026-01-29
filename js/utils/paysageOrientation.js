/*****************************************************************************************/
/** Fonction pour foncer l'utilisateur soit forcer d'utiliser le mode paysage pour jouer */
/*****************************************************************************************/

export function isLandscapeBlocked() {
  return (
    window.innerWidth < 960 &&
    window.matchMedia("(orientation: portrait)").matches
  );
}

export function showOrientationBlock() {
  document.body.classList.add("orientation-blocked");
}

export function hideOrientationBlock() {
  document.body.classList.remove("orientation-blocked");
}
