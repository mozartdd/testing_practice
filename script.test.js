import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./script";

// Test for capitalize function
test('Expects parameter input "jack" to return "Jack"', () => {
  expect(capitalize('jack')).toBe('Jack');
});
test('Expects parameter input "Adam" to return "Adam"', () => {
  expect(capitalize('Adam')).toBe('Adam');
});

// Test for reverse string function
test('Expect parameter input John to return nhoJ', () => {
  expect(reverseString('John')).toBe('nhoJ');
});
test('Expect parameter input aka car to return aka', () => {
  expect(reverseString('aka')).toBe('aka');
});

// Test for mathematical functions
test('2 + 2 = 4', () => {
  expect(calculator.add(2, 2)).toEqual(4);
});
test('7 - 3 = 4', () => {
  expect(calculator.subtract(7, 3)).toEqual(4);
});
test('5 / 2 = 2.50', () => {
  expect(calculator.divide(5, 2)).toBeCloseTo(2.5);
});
test('5 * 5 = 25', () => {
  expect(calculator.multiply(5, 5)).toEqual(25);
});

// Test for caesar cypher program
test('Ciphered \'xyz\' of 3 turns should return \'abc\'', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});
test('Ciphered \'HeLLo\' of 3 turns should return \'KhOOr\'', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});
test('Ciphered \'Hello, World!\' of 3 turns should return \'Khoor, Zruog\'', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

const object = analyzeArray([1,8,3,4,2,6]);

// Test to analyze function which takes in array of numbers and return it average, min, max and length
test('test', () => {
  expect(object).toStrictEqual(
    {
      average: 4,
      min: 1,
      max: 8,
      length: 6
    }
  )
})