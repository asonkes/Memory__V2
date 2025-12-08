/*****************************************************/
/************** Permet d'intégrer les sons ***********/
/*****************************************************/

/** Par défaut le son est coupé */
let isPlaySound = false;

/** On fait une fonction start */
export function startPlaySound(file) {
    /** Si le son est coupé, si on a enclenché le bouton mute */
    /** Alors on sort et on ne fait pas le reste */
    if(isPlaySound) return;

    const audio = new Audio(file);
    audio.volume = 0.2;
    audio.play();
}

/** On fait une fonction stop pour couper le son */
export function stopPlaySound() {
    isPlaySound = true;
}

export function reactiveSound() {
    isPlaySound = false;
}