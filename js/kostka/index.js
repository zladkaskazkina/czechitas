'use strict';
// když uživatel zmáčkne na stránce mezerník, na kostce se zobrazí číslo o jedna vyšší. Po šestce zobrazte opět jedničku.
let diceValue = 1;
const classDice = document.querySelector('.dice');

document.addEventListener('keypress', diceChange);

function diceChange(event) {
  if (event.keyCode === 32) {
    diceValue++;
    classDice.src = 'img/side' + diceValue + '.svg';
    if (diceValue === 6) {
      diceValue = 0;
    }
  }
}