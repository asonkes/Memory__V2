/*****************************************************/
/************ Création du mode jour/nuit *************/
/*****************************************************/

/** Header variables pour changer 'dark' en 'light' */

export function darkLight() {
    const dark = document.getElementById("dark");
    const light = document.getElementById("light");
    const body = document.querySelector("body");

    light.addEventListener("click", (event) => {
        event.preventDefault();

        dark.classList.add("active");
        light.classList.add("active");

        body.classList.add("light");
    })

    dark.addEventListener("click", (event) => {
        event.preventDefault();

        dark.classList.remove("active");
        light.classList.remove("active");

        body.classList.remove("light");
    })
}
