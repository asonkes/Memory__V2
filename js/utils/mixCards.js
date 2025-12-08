/*****************************************************/
/************ Mélange random pour les cards **********/
/*****************************************************/

export function mixCards(array) {
  /** Ici on détermine la longueur du tableau */
  let index = array.length;

  /** Tant qu'on est pas arrivé à l'index '0', on mélange */
  while (index != 0) {
    /** On crée des nombres aléatoires entre 0 et 11 */
    let random = Math.floor(Math.random() * index);
    index--;

    /** On échange les valeurs */
    /** Ex: random[7], index[11], on va chercher valeur dans la 7eme position et la mettre à la 11eme */
    [array[index], array[random]] = [array[random], array[index]];
  }
}