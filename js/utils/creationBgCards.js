import { jsonFunction } from "/js/utils/jsonFunction.js";

/*****************************************************/
/********** Création du background des cards *********/
/*****************************************************/
/** Ici c'est pour le recto */
export function creationBgCards(cardsFront, cardsBack, idImage) {

    if(idImage === "img1") {
        /** On s'occupe du 'front' des cards */
        cardsFront.src = "/images/cards/dora/recto.avif";
        cardsFront.alt = "Recto de la carte du thème Dora.";
        cardsFront.classList.add("cover");
        cardsBack.classList.add("cover");
    }

    if(idImage === "img2") {
        /** On s'occupe du 'front' des cards */
        cardsFront.src = "/images/cards/patPatrouille/recto.png";
        cardsFront.alt = "Recto de la carte du thème Pat patrouille.";
        cardsFront.classList.add("cover");
        cardsBack.classList.add("cover");
    }

    if(idImage === "img3") {
        /** On s'occupe du 'front' des cards */
        cardsFront.src = "/images/cards/dinosaures/recto.png";
        cardsFront.alt= "Recto de la carte du thème Dinosaures.";
        cardsFront.classList.add("contain");
        cardsBack.classList.add("contain");
    }
}

export async function creationBackCards(idImage) {
    const data = await jsonFunction(); 

    let tab;
    let alt;

    if(idImage === "img1") {
        /** On s'occupe du 'back' des cards */
        tab = data.dora.map(card => card.image);
        alt = data.dora.map(card => card.alt);
    }

    if(idImage === "img2") {
        /** On s'occupe du 'back' des cards */
        tab = data.patPatrouille.map(card => card.image);
        alt = data.patPatrouille.map(card => card.alt);
    }

    if(idImage === "img3") {
        /** On s'occupe du 'back' des cards */
        tab = data.dino.map(card => card.image);
        alt = data.dino.map(card => card.alt);
    }

    /** Obligé de faire ça, quand on veut retourner 2 valeurs en JS */
    return { tab, alt };
}


