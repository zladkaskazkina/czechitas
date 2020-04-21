'use strict'
let x;
if (1 <= x <= 10 || 19 <= x <= 28) {
  if (x % 2 === 0) {
    // x je sude a black
  } else {
    // x je liche a red
  }
} else if (10 < x < 19) {
  if (x % 2 === 0) {
    // x je liche a red
  } else {
    // x je sude a black
  }
}
else if (x === 0) {
  //x je  nula a green
}


/* const year = Number(prompt('The year is:'));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  document.write('Its a leap year');
}
else {
  document.write('Its not a leap year');
}
*/