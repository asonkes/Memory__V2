import { contactInformations } from "/js/utils/jsonFunction.js";

/*****************************************************/
/***** Permet de contrôler les input required  *******/
/*****************************************************/

export function contact() {
  /** Récupérer les variables dont on a besoin */
  const form = document.getElementById("form");
  if(!form) return;

  let input_name = document.getElementById("name");
  let input_lastName = document.getElementById("lastname");
  let input_email = document.getElementById("email");
  let input_password = document.getElementById("password");
  let textarea_message = document.getElementById("message");
  /** On fait un tableau des champs du formulaire */
  const contactFields = [
    {item: input_name, cls: "errorName", message: "Votre nom est manquant !" },
    {item: input_lastName, cls: "errorLastname", message: "Votre prénom est manquant !"},
    {item: input_email, cls: "errorEmail", message: "E-mail non valide !"},
    {item: input_password, cls: "errorPassword", message: "Votre mot de passe est manquant !" },
    {item: textarea_message, cls: "errorMessage", message: "Votre message est manquant !"}
  ]

  /** On met 'async' pour faire fonctionner le 'await' */
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    /** On va vider les input d'abord */
    let isValid = true;

    /** On supprime le message d'erreur existant */
    /** cls = class */
    const removeError = (cls) => {
      const err = document.querySelector(`.${cls}`);
      if(err) err.remove();
    }

    /** On va créer le message d'erreur s'il n'existe pas */
    const showError = (item, cls, message) => {
      isValid = false;

      let err = document.querySelector(`.${cls}`);

      if(!err) {
        err = document.createElement("span");
        err.classList.add("error", cls);
        err.textContent = message;
        item.insertAdjacentElement("beforebegin", err);
      }
    }

    contactFields.forEach(element => {
      if(element.item.value != "") {
        removeError(element.cls);
      } else {
        showError(element.item, element.cls, element.message);
      }
    });

    /** Définir la longueur pour le textarea */
    if(textarea_message.value.length > 255) {
      showError(textarea_message, "errorTextarea", "Votre message ne peut dépasser 255 caractères.");
    } else {
      removeError("errorTextarea");
    }
    
    /** Si tout est valide, on envoie les données */
    if (isValid) {
      /** On va récupérer les données de mon formulaires, les mettre dans un objet JS */
      const data = {
        name: input_name.value,
        lastname: input_lastName.value,
        email: input_email.value,
        password: input_password.value,
        message: textarea_message.value,
      };

      /** Mais pour pouvoir envoyer ses données au serveur, il faut les transformer en json */
      await contactInformations(data); // <-- on envoie les données ici
      /** On vide les champos du formulaire */
      form.reset();
      input_email.value = "";
      input_password.value = "";
      console.log("Message envoyé !");
    }
  });
}

contact();
