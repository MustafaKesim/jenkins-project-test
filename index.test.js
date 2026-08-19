const { add, subtract, multiply, divide } = require('./index');

test('toplama dogru calisir', () => {
  expect(add(2, 3)).toBe(5);
});

test('cikarma dogru calisir', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('carpma dogru calisir', () => {
  expect(multiply(4, 3)).toBe(12);
});

test('bolme dogru calisir', () => {
  expect(divide(10, 2)).toBe(5);
});

test('sifira bolme hata firlatir', () => {
  expect(() => divide(10, 0)).toThrow('Sifira bolme hatasi');
});
