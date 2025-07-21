// Helper function to validate input for calculator obj functions
function validateNumbers(a, b) {
  if (typeof a !== 'number' && typeof b !== 'number') {
    throw new Error('Both input values must be numbers.');
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

function convertToAscii(str) {
  const arrayOfChars = str.split('');
  for (let i = 0; i < arrayOfChars.length; i++) {
    if (arrayOfChars[i] === '') {
      continue;
    } else {
      arrayOfChars[i] = arrayOfChars[i].charCodeAt(0);
    }
  }
  return arrayOfChars;
}

function getNewPosition(arrayOfChars, cipher) {
  const newArrayOfChars = [];
  for (let i = 0; i < arrayOfChars.length; i++) {
    // If uppercase
    if (arrayOfChars[i] < 91 && arrayOfChars[i] > 64) {
      newArrayOfChars[i] = (arrayOfChars[i] - 65 + cipher) % 26 + 65;
      // If lowercase
    } else if (arrayOfChars[i] < 123 && arrayOfChars[i] > 96) {
      newArrayOfChars[i] = (arrayOfChars[i] - 97 + cipher) % 26 + 97;
      // Else if punctuation or space
    } else newArrayOfChars[i] = arrayOfChars[i];
  }
  return newArrayOfChars;
}

export function caesarCipher(str, cipher) {
  validateString(str);
  validateNumbers(cipher);
  let arrayOfChars = convertToAscii(str);
  let movedArrayOfChars = getNewPosition(arrayOfChars, cipher);
  let encipheredString = '';

  for (let i = 0; i < movedArrayOfChars.length; i++) {
    encipheredString += String.fromCharCode(movedArrayOfChars[i]);
  }
  return encipheredString;
}



// Convert each char of user input if it is a letter to ascii code 
// if lowercase do [(Code - 65) % 26 + 65] if uppercase do [(Code - 97) % 26 + 97] - get it's new position in ascii table
// Convert each char back to letter using it's ascii code