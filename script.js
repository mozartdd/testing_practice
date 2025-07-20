export function capitalize(str) {
  const firstLetter = str.slice(0,1).toUpperCase();
  const strTail = str.slice (1);
  return firstLetter + strTail;
}

