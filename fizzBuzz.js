let number=0;
// definir les multiples
let multipleOfThree=[3,6,9,12,18,21,24,27,33,36,39,42,48,51,54,57,63,66,69,72,78,81,84,87,93,96,99];
let multipleOfFive=[5,10,20,25,35,40,50,55,65,70,80,85,95,100];
let multipleOfBoth=[15,30,45,60,75,90];
// condition : 3 types de multiples
function print(number){
  if (multipleOfThree.includes(number)){
    console.log('Fizz');
  } else if (multipleOfFive.includes(number)){
    console.log('Buzz');
  } else if (multipleOfBoth.includes(number)){
    console.log('FizzBuzz');
  } else {
    return number;
  }
}
// Afficher résultat
//console.log(print(18)); Three
console.log(print(10)); // Five
//console.log(print(30)); Both