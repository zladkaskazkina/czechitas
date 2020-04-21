'use strict'
const order = prompt('Your order:');
let price = 0;
if (order < 50) {
  price = 300;
} else if (order < 200) {
  price = 250;
} else if (order < 500) {
  price = 200;
} else if (order < 1000) {
  price = 150;
} else {
  price = 120;
}
let totalPrice = Number(order) * price;
document.write('Total price of your order is ' + totalPrice);