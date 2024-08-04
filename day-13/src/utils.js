const PI = 3.14159;
const E = 2.71828;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

export default {
  PI,
  E,
  add,
  subtract,
  multiply,
  divide,
};