// Your task is to write function cipher that converts a regular English sentence to ciphered text.
// Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

  const cipher={
    'A' : 'Q',
    'B' : 'W',
    'C' : 'E',
    'D' : 'R',
    'E' : 'T',
    'F' : 'Y',
    'G' : 'U',
    'H' : 'I',
    'I' : 'O',
    'J' : 'P',
    'K' : 'A',
    'L' : 'S',
    'M' : 'D',
    'N' : 'F',
    'O' : 'G',
    'P' : 'H',
    'Q' : 'J',
    'R' : 'K',
    'S' : 'L',
    'T' : 'Z',
    'U' : 'X',
    'V' : 'C',
    'W' : 'V',
    'X' : 'B',
    'Y' : 'N',
    'Z' : 'M'
  };
  let str = 'I HAVE A SECRET MESSAGE FOR YOU';
  Object.keys(cipher).forEach((key) => {
    str = str.replaceAll(key,cipher[key])
  });
console.log(str);



// a new function to decipher back to English
// .map pour segmenter chaque caractère
// var cipher = a =Q
// decipher : inverse

