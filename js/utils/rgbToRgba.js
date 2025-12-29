// On va remplacer la valeur attendue de la db.json
// Et on transforme le 'rgb' en 'rgba'
export function rgbToRgba(rgb, alpha) {
  return rgb.replace("rgb(", "rgba(").replace(")", `, ${alpha})`);
}