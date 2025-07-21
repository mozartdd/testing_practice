// Helper function to validate input for calculator obj functions
function validateNumbers(a, b) {
  if (typeof a !== 'number' && typeof b !== 'number') {
    throw new Error('Input value must be number.');
  }
};

// Helper function for string validation
function validateString(str) {
  if (typeof str !== 'string') {
    throw new Error('Please enter valid string input.');
  }
} 

export function capitalize(str) {
  validateString(str);

  const firstLetterCapitalized = str.slice(0,1).toUpperCase();
  const strTail = str.slice (1);
  return firstLetterCapitalized + strTail;
}

export function reverseString(str) {
  validateString(str);

  return str.split('').reverse('').join('');
}

export const calculator = {
  add: (a, b) => {
    validateNumbers(a, b);
    return a + b;
  },
  subtract: (a, b) => {
    validateNumbers(a, b);
    return a - b;
  },
  divide: (a, b) => {
    validateNumbers(a, b);
    return Number((a / b).toFixed(2));
  },
  multiply: (a, b) => {
    validateNumbers(a, b);
    return a * b;
  }
}

// Convert each char of user input to ascii code 
// If lowercase do [(Code - 65 + cipher) % 26 + 65] else if uppercase do [(Code - 97 + cipher) % 26 + 97] - get it's new position in ascii table
// Convert each char back to letter using it's ascii code and combine them in to single string

function convertToAscii(str) {
  const arrayOfAscii = str.split('');

  for (let i = 0; i < arrayOfAscii.length; i++) {
    arrayOfAscii[i] = arrayOfAscii[i].charCodeAt(0);
  }
  return arrayOfAscii;
}

function getNewPosition(arrayOfAscii, cipher) {
  const newArrayOfAscii = [];

  for (let i = 0; i < arrayOfAscii.length; i++) {
    // If uppercase
    if (arrayOfAscii[i] < 91 && arrayOfAscii[i] > 64) {
      newArrayOfAscii[i] = (arrayOfAscii[i] - 65 + cipher) % 26 + 65;
      // If lowercase
    } else if (arrayOfAscii[i] < 123 && arrayOfAscii[i] > 96) {
      newArrayOfAscii[i] = (arrayOfAscii[i] - 97 + cipher) % 26 + 97;
      // Else if punctuation or space
    } else newArrayOfAscii[i] = arrayOfAscii[i];
  }
  return newArrayOfAscii;
}

export function caesarCipher(str, cipher) {
  validateString(str);
  validateNumbers(cipher);

  let arrayOfAscii = convertToAscii(str);
  let movedArrayOfAscii = getNewPosition(arrayOfAscii, cipher);
  let encipheredString = '';

  for (let i = 0; i < movedArrayOfAscii.length; i++) {
    encipheredString += String.fromCharCode(movedArrayOfAscii[i]);
  }
  return encipheredString;
}

export function analyzeArray(array) {
  const sum = array.reduce((total, current) =>  total + current, 0);
  const sorted = array.sort((a, b) => a - b);

  const average = sum / array.length;
  const min = sorted[0];
  const max = sorted[sorted.length - 1];
  const length = array.length;

  return {average, min, max, length}
}