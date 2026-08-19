function add(a, b) {
  return a - b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Sifira bolme hatasi');
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

if (require.main === module) {
  console.log('Uygulama calisiyor: 2 + 3 =', add(2, 3));
}
