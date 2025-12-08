import { contactInformations } from "/js/utils/jsonFunction.js";

/*****************************************************/
/***** Permet de contrôler les input required  *******/
/*****************************************************/

export function contact() {
  /** Récupérer les variables dont on a besoin */
  const form = document.getElementById("form");
  let input_name = document.getElementById("name");
  let input_lastName = document.getElementById("lastname");
  let input_email = document.getElementById("email");
  let input_password = document.getElementById("password");
  let textarea_message = document.getElementById("message");

  /** On va vider les input d'abord */
  let isValid = true;

  /** On met 'async' pour faire fonctionner le 'await' */
  if(form) {
    form.addEventListener("submit", async (event) => {
    event.preventDefault();

    /** Ici si l'input n'est plus vide... */
    //let errors = document.querySelectorAll('.error')

    if (input_name.value != "") {
      let errorName = document.querySelector(".errorName");
      if (errorName) {
        errorName.remove();
      }
    }

    if (input_lastName.value != "") {
      let errorLastname = document.querySelector(".errorLastname");
      if (errorLastname) {
        errorLastname.remove();
      }
    }

    if (input_email.value != "") {
      let errorEmail = document.querySelector(".errorEmail");
      if (errorEmail) {
        errorEmail.remove();
      }
    }

    if (input_password.value != "") {
      let errorPassword = document.querySelector(".errorPassword");
      if (errorPassword) {
        errorPassword.remove();
      }
    }

    if (textarea_message.value != "") {
      let errorTextarea = document.querySelector(".errorTextarea");
      if (errorTextarea) {
        errorTextarea.remove();
      }
    }

    if (textarea_message.value != "") {
      let errorMessage = document.querySelector(".errorMessage");
      if (errorMessage) {
        errorMessage.remove();
      }
    }

    /** Ici on va vérifier si les champs sont vides et ajouter le message d'erreur */
    // let inputs = document.querySelectorAll('input')
    // pour chaque input s'il est vide créer span et ajouter
    // errors = {
    //     "name" : {
    //           "class" : "errorName",
    //           "text" : "Votre nom est manquant !"
    //      },
    //      "lastname" : pareil
    // }

    if (input_name.value === "") {
      isValid = false;

      let errorName = document.querySelector(".errorName");

      if (!errorName) {
        errorName = document.createElement("span");
        errorName.classList.add("error", "errorName");
        errorName.textContent = `Votre nom est manquant !`;
        input_name.insertAdjacentElement("beforebegin", errorName);
      }
    }

    if (input_lastName.value === "") {
      isValid = false;

      let errorLastname = document.querySelector(".errorLastname");

      if (!errorLastname) {
        errorLastname = document.createElement("span");
        errorLastname.classList.add("error", "errorLastname");
        errorLastname.textContent = `Votre prénom est manquant !`;
        input_lastName.insertAdjacentElement("beforebegin", errorLastname);
      }
    }

    if (input_email.value === "") {
      isValid = false;

      let errorEmail = document.querySelector(".errorEmail");
      if (!errorEmail) {
        errorEmail = document.createElement("span");
        errorEmail.classList.add("error", "errorEmail");
        errorEmail.textContent = `E-mail non valide !`;
        input_email.insertAdjacentElement("beforebegin", errorEmail);
      }
    }

    if (input_password.value === "") {
      isValid = false;

      let errorPassword = document.querySelector(".errorPassword");
      if (!errorPassword) {
        errorPassword = document.createElement("span");
        errorPassword.classList.add("error", "errorPassword");
        errorPassword.textContent = `Votre mot de passe est manquant !`;
        input_password.insertAdjacentElement("beforebegin", errorPassword);
      }
    }

    if (textarea_message.value === "") {
      let errorMessage = document.querySelector(".errorMessage");
      if (!errorMessage) {
        isValid = false;

        errorMessage = document.createElement("span");
        errorMessage.classList.add("error", "errorMessage");
        errorMessage.textContent = `Votre message est manquant !`;
        textarea_message.insertAdjacentElement("beforebegin", errorMessage);
      }
    }

    /** Définir la longueur pour le textarea */
    let errorMessage = document.querySelector(".errorMessage");
    if (textarea_message.value.length > 255) {
      errorMessage.remove();

      isValid = false;

      let errorTextarea = document.querySelector(".errorTextarea");
      if (!errorTextarea) {
        errorTextarea = document.createElement("span");
        errorTextarea.classList.add("error", "errorTextarea");
        errorTextarea.textContent = `Votre message ne peut dépasser 255 caractères.`;
        textarea_message.insertAdjacentElement("beforebegin", errorTextarea);
      }
    } else {
      let errorTextarea = document.querySelector(".errorTextarea");
      if (errorTextarea) errorTextarea.remove();
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
}

contact();
