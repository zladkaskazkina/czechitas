'use strict';
// Pomocí JavaScriptu zařiďte, aby se při kliknutí na element žárovky k tomuto elementu přidala CSS třída bulb--on. Žárovka by se takto měla rozsvítit.
// Vylepšete program tak, aby na druhé kliknutí žárovka opět zhasnula. Opětovným klikáním na žárovku ji tak můžeme rozsvěcovat a zhasínat.
console.log('funguju!');
const changeIt = (event) => {
  document.querySelector('.bulb').classList.toggle('bulb--on');
}

const bulb = document.querySelector('.bulb');
bulb.addEventListener('click', changeIt);
