import { jsonFunction } from "/js/utils/jsonFunction.js";

/*****************************************************/
/********** Création du background des cards *********/
/*****************************************************/
/** Ici c'est pour le recto */
export function creationBgCards(cardsFront, cardsBack, idImage) {

    const themes = [
        {item: "theme1", src: "/images/cards/dora/recto.avif", alt: "Recto de la carte du thème Dora.", classFront: "cover", classBack: "cover"},
        {item: "theme2", src: "/images/cards/patPatrouille/recto.png", alt: "Recto de la carte du thème Pat patrouille.", classFront: "cover", classBack: "cover"}, 
        {item: "theme3", src: "/images/cards/dinosaures/recto.png", alt: "Recto de la carte du thème Dinosaures.", classFront: "contain", classBack: "contain"}
    ];

    /** On cherche un élément parmis le tableau */
    const theme = themes.find((element) => element.item === idImage);
    /** Si pas de theme, on arrete */
    if(!theme) return;

    /** Au sinon, on fait la suite, n'importe quel soit le theme */
    cardsFront.src = theme.src;
    cardsFront.alt = theme.alt;
    cardsFront.classList.add(theme.classFront);
    cardsBack.classList.add(theme.classBack);
}

export async function creationBackCards(idImage) {
    const data = await jsonFunction(); 

    /** Ici on va utiliser un objet (car ordre n'a pas d'importance, valeur = identifiant précis) */
    const tab = {
        /** On récupère chaque fois un tableau (toutes les images de dora) */
        theme1: data.dora,
        /** On récupère chaque fois un tableau (toutes les images de pat Patrouille) */
        theme2: data.patPatrouille,
        /** On récupère chaque fois un tableau (toutes les images de dino) */
        theme3: data.dino
    }

    const backCards = tab[idImage];
    if(!backCards) return;

    /** On extrait les infos */
    const cardImage = backCards.map(element => element.image);
    const cardText = backCards.map(element => element.alt);
    const cardBg = backCards.map(element => element.background_color);

    /** Obligé de faire ça, quand on veut retourner 2 valeurs en JS */
    return { cardImage, cardText, cardBg };
}


