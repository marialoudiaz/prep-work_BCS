// Your task is to write function cipher that converts a regular English sentence to ciphered text.
// Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

const cipher = {
  'A': 'Q',
  'B': 'W',
  'C': 'E',
  'D': 'R',
  'E': 'T',
  'F': 'Y',
  'G': 'U',
  'H': 'I',
  'I': 'O',
  'J': 'P',
  'K': 'A',
  'L': 'S',
  'M': 'D',
  'N': 'F',
  'O': 'G',
  'P': 'H',
  'Q': 'J',
  'R': 'K',
  'S': 'L',
  'T': 'Z',
  'U': 'X',
  'V': 'C',
  'W': 'V',
  'X': 'B',
  'Y': 'N',
  'Z': 'M'
};
const decipher={
  'Q' : 'A',
  'W' : 'B',
  'E' : 'C',
  'R' : 'D',
  'T' : 'E',
  'Y' : 'F',
  'U' : 'G',
  'I' : 'H',
  'O' : 'I',
  'P' : 'J',
  'A' : 'K',
  'S' : 'L',
  'D' : 'M',
  'F' : 'N',
  'G' : 'O',
  'H' : 'P',
  'J' : 'Q',
  'K' : 'R',
  'L' : 'S',
  'Z' : 'T',
  'X' : 'U',
  'C' : 'V',
  'V' : 'W',
  'B' : 'X',
  'N' : 'Y',
  'M' : 'Z'
};

function ciphered(str) {
  return str.replaceAll(/[A-Z]/g, c => cipher[c] || c);
};
console.log(ciphered('I HAVE A SECRET MESSAGE FOR YOU'));

function deciphered(str) {
  return str.replaceAll(/[A-Z]/g, d => decipher[d] || c);
};
console.log(deciphered(ciphered('I HAVE A SECRET MESSAGE FOR YOU')));
/*let str = 'I HAVE A SECRET MESSAGE FOR YOU';
  Object.keys(cipher).forEach((key) => {
    str = str.replaceAll(key,cipher[key])
  });
console.log(str);
*/

