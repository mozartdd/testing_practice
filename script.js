export function capitalize(str) {
  if (typeof str !== 'string') {
    throw new Error('Please enter valid string input.');
  }

  const firstLetter = str.slice(0,1).toUpperCase();
  const strTail = str.slice (1);
  return firstLetter + strTail;
}

export function reverseString(str) {
  if (typeof str !== 'string') {
    throw new Error('Please enter valid string input.');
  }

  return str.split('').reverse('').join('');
}

// Helper function to validate input for calculator obj functions
function validateNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both input values must be numbers.');
  }
};

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