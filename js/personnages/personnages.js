
/*****************************************************/
/************** Création des personnages *************/
/*****************************************************/

/** On va initialiser les variables que l'on veut */
const persoContainer = document.querySelector(".persoContainer");

/*****************************************************/
/*** Permet l'affichage statique de Pat Patrouille ***/
/*****************************************************/

export function createPersonnages(tabPerso, min = 0, max = 9) {
    /** Permet d'afficher les 1ers personnages */
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
    perso.style.backgroundColor = element.background_color;

    /** On ajoute une div parente de tous les éléments */
    const persoEnfant = document.createElement("div");
    persoEnfant.classList.add("persoEnfant");

    /** On va créer le titre */
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = element.nom;
    
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
    img.src = element.perso_image;
    img.alt = element.perso_alt;

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
    /** Parent de 'title', de 'description', de 'particularite', de 'role' */
    block_text.append(description, particularite, role);
    /** Parent de l'image */
    block_image.appendChild(img);
    /** Parent du 'block_image' et du 'block_text' */
    persoEnfant.append(title, block_image, block_text);

    perso.appendChild(persoEnfant);
    /** Parent de la div 'perso' */

    if(persoContainer) {
        persoContainer.appendChild(perso);
    }
}




