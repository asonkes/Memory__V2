/*****************************************************/
/***** Permet de mettre un 'cache' sur le password ***/
/*****************************************************/

// Permet de cacher les icones "eye" pour mot de passe
const iconEye = document.querySelector(".iconEye");
const iconEyeCash = document.querySelector(".iconEyeCash");
const inputPassword = document.getElementById("password");

iconEye.addEventListener("click", () => {
  iconEye.classList.add("active");
  iconEyeCash.classList.add("active");
  inputPassword.type = "text";
});

iconEyeCash.addEventListener("click", () => {
  iconEye.classList.remove("active");
  iconEyeCash.classList.remove("active");
  inputPassword.type = "password";
});
