// Create a function which takes a string as an argument and moves the first letter of each word to the end of it, then adds "ay" to the end of the word. 
//Leave punctuation marks untouched.

function makeLatin(str){
  return str.split(' ').map(x =>/[a-zA-Z]+/.test(x) ? x.slice(1)+x[0]+'ay' : x).join(' ');
}
//console.log(makeLatin('Hum, soup'));
console.log(makeLatin('Hello, world'));

//extraire (',' ';' '-' '_' '!' '?' '.' )



/* EXPLANATION IN DETAILS
  return str.split(' ') // create an array of each word
  .map (x=>) // create a new array w/ results of given function
  
  Inside .map 

  a. condition => (x => create a variable x for each word    /[a-zA-Z]+/ //check for every caracters in this character set for x   .test(x)   //check
  b. if true => ? x.slice(1)+x[0]+'ay'   // new concatened string : remove first letter + add first letter to the end of str + add 'ay' 
  c. if false =>: x)     // return x(original word) without modifications
  
  .join('') // join all
  */