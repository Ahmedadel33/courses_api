// math.test.js
const sum = require('./math');

test('adds 1 + 2 to equal 3', () => {
  // Act & Assert
  expect(sum(1, 2)).toBe(3);
});