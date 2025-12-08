/*************************************************************************/
/** Fonction pour pouvoir faire le lien entre les pages et le fichier JSON **************************************************************************/

export async function jsonFunction() {
  try {
    const response = await fetch("http://localhost:3000/cards");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Erreur survenue en JSON", error);
  }
}

/******************************************************************/
/** Fonction pour pouvoir envoyer les données de mon formulaire  **/
/******************************************************************/
export async function contactInformations(data) {
  try {
    const response = await fetch("http://localhost:3000/messages", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    /** Récupérer la réponse du serveur en JSON */
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(
      "Erreur survenue lors de l'envoi des données du formulaire",
      error
    );
  }
}
