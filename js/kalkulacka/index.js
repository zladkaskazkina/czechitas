'use strict';

const calc = (num1, op, num2) => op(num1, num2);

const plus = (num1, num2) => num1 + num2;
const minus = (num1, num2) => num1 - num2;
const times = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

let acc = 0;
let op = null;
let display = 'output';

const displayElm = document.querySelector('.display');

const numClick = (event) => {
  const btnValue = event.target.textContent;
  if (display === 'output') {
    displayElm.textContent = btnValue;
    display = 'input';
  } else if (display === 'input' && displayElm.textContent !== 0) {
    displayElm.textContent = displayElm.textContent + btnValue;
  }
  console.log(displayElm.textContent);
};

const getValue = () => {
  const value = Number(displayElm.textContent);
  return value;
};
console.log(getValue());

const setAccumulator = (value) => {
  acc = value;
  displayElm.textContent = value;
  display = 'output';
};


const equalsClick = () => {
  if (op === null) {
    //hodnotu z displeje rovnou vložíme do akumulátoru
    getValue();
    setAccumulator();
  } else {
    acc = calc(acc, op, getValue());
    setAccumulator(acc);
  }
  display = 'output';
  op = null;
};

const clearClick = () => {
  acc = 0;
  displayElm.textContent = 0;
  op = null;
  display = 'output';
};

const plusClick = () => {
  acc = Number(displayElm.textContent);
  op = plus;
  display = 'output';
};

const minusClick = () => {
  acc = Number(displayElm.textContent);
  op = minus;
  display = 'output';
};

const timesClick = () => {
  acc = Number(displayElm.textContent);
  op = times;
  display = 'output';
};

const divideClick = () => {
  acc = Number(displayElm.textContent);
  op = divide;
  display = 'output';
};
document.querySelector('#btn0').addEventListener('click', numClick);
document.querySelector('#btn1').addEventListener('click', numClick);
document.querySelector('#btn2').addEventListener('click', numClick);
document.querySelector('#btn3').addEventListener('click', numClick);
document.querySelector('#btn4').addEventListener('click', numClick);
document.querySelector('#btn5').addEventListener('click', numClick);
document.querySelector('#btn6').addEventListener('click', numClick);
document.querySelector('#btn7').addEventListener('click', numClick);
document.querySelector('#btn8').addEventListener('click', numClick);
document.querySelector('#btn9').addEventListener('click', numClick);
document.querySelector('#btn-clear').addEventListener('click', clearClick);
document.querySelector('#btn-equals').addEventListener('click', equalsClick);
document.querySelector('#btn-plus').addEventListener('click', plusClick);
document.querySelector('#btn-minus').addEventListener('click', minusClick);
document.querySelector('#btn-times').addEventListener('click', timesClick);
document.querySelector('#btn-divide').addEventListener('click', divideClick);