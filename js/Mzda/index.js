'use strict';
const wage = Number(prompt('Your hourly wage:'));
const time = Number(prompt('Your part-time in %: '));
let grossWage = wage * (time / 100) * 8 * 21;
let superGrossWage = Math.ceil(grossWage * 1.338 / 100) * 100; //zaokrouhleni na horu na stovky
let netWage = Math.floor(grossWage - grossWage * 0.107 - superGrossWage * 0.15 + 2070);
document.write('Your Net Wage is ' + netWage);



/*
Prihlaseni:

const name = prompt('Your Name:');
const password = prompt('Your password:');
if (password === 'simsalabim') {
  const age = prompt('Your age:');
  if (age > 18) {
    document.write('Smis vstoupit')
  }
} else {
  document.write('Vstup zakazan')
} */

/*
Cena vstupenky
const age = Number(prompt('Your age:'));
const fullPrice = 12;
let price;
if (age < 6) {
  price = 0;
} else if (age < 27) {
  price = fullPrice * 0.65;
} else if (age < 64) {
  price = fullPrice;
} else {
  price = fullPrice * 0.5;
}
document.write('Total cost is: ' + Math.round(price));
*/
