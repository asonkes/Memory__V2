/*****************************************************/
/************** Création des personnages *************/
/*****************************************************/

/** On va initialiser les variables que l'on veut */
const persoContainer = document.querySelector(".persoContainer");

/*****************************************************/
/*** Permet l'affichage statique de Pat Patrouille ***/
/*****************************************************/

export function createPersonnages(tabPerso, min = 0, max = 8) {
    /** Pemret d'afficher les 1ers personnages */
    if(tabPerso) {
        tabPerso.slice(min, max).forEach(element => {
            persoWrapper(element);
        })
    }
}

/*************************************************************/
/** Fonction qui permet de globaliser la création d'éléments */
/*************************************************************/

export function persoWrapper(element) {
    const perso = document.createElement("div");
    /** On ajoute une classe */
    perso.classList.add("perso");

    /** Ici on faire la div pour l'image */
    const block_image = document.createElement("div");
    /** On ajoute une classe */
    block_image.classList.add("block_image");

    /** Ici on faire la div pour le texte */
    const block_text = document.createElement("div");
    /** On ajoute une classe */
    block_text.classList.add("block_text");

    /** Ici on va créer l'image */
    const img = document.createElement("img");
    img.src = element.image;
    img.alt = element.alt

    /** On va créer le titre */
    const title = document.createElement("p");
    title.classList.add("title");
    
    const span_title1 = document.createElement("span");
    span_title1.textContent = "Nom : ";

    const span_title2 = document.createElement("span");
    span_title2.textContent = element.nom;

    /** On va créer la description */
    const description = document.createElement("p");
    description.classList.add("description");

    const description_span1 = document.createElement("span");
    description_span1.textContent = 'Description : ';

    const description_span2 = document.createElement("span");
    description_span2.textContent = element.description;

    /** On va créer le rôle */
    const role = document.createElement("p");
    role.classList.add("role");

    const role_span1 = document.createElement("span");
    role_span1.textContent = `Rôle : `;

    const role_span2 = document.createElement("span");
    role_span2.textContent = element.role;

    /** On va créer la particularité */
    const particularite = document.createElement("p");
    particularite.classList.add("particularite");

    const particularite_span1 = document.createElement("span");
    particularite_span1.textContent = `Particularité : `;

    const particularite_span2 = document.createElement("span");
    particularite_span2.textContent = element.particularite;

    /** Parent des spans de rôle */
    role.append(role_span1, role_span2);
    /** Parent des spans de particularite */
    particularite.append(particularite_span1, particularite_span2);
    /** Parent des spans de description */
    description.append(description_span1, description_span2);
    /** Parent des spans du titre */
    title.append(span_title1, span_title2);
    /** Parent de 'title', de 'description', de 'particularite', de 'role' */
    block_text.append(title, description, particularite, role);
    /** Parent de l'image */
    block_image.appendChild(img);
    /** Parent du 'block_image' et du 'block_text' */
    perso.append(block_image, block_text);
    /** Parent de la div 'perso' */

    if(persoContainer) {
        persoContainer.appendChild(perso);
    }
}




