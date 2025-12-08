/*****************************************************/
/************ Fonctionnalités du menu Burger *********/
/*****************************************************/

export function initBurger() {
    const burger_icon = document.querySelector(".burger_icon");
    const nav = document.querySelector(".nav");
    /** Lien header */
    const span1 = document.getElementById("span1");
    const span2 = document.getElementById("span2");
    const span3 = document.getElementById("span3");

    /** Lien pour garder le hover après rechargement des li */
    const link = document.querySelectorAll(".link");

    if (!burger_icon) {
        return;
    }

    burger_icon.addEventListener("click", (event) => {
        event.stopPropagation();
        nav.classList.toggle("active");

        span1.classList.toggle("active");
        span2.classList.toggle("active");
        span3.classList.toggle("active");
        
    });

    document.addEventListener("click", () => {
        nav.classList.remove('active');

        span1.classList.remove('active');
        span2.classList.remove('active');
        span3.classList.remove('active');
    })

    link.forEach(element => {
        element.addEventListener("click", () => {
            if(element.id) {
                localStorage.setItem("linkId", element.id);
            }
        })
    })

    let valueId = localStorage.getItem("linkId");

    /* Au rechargement */
    if(valueId) {
        link.forEach(element => {
            // on enlève "active" des éléments qui l'on déjà 
            element.classList.remove("active");
            /** On récupère de nouveau l'id */
            if (element.id === valueId) {
                element.classList.add("active");
            }
        })
    }
}