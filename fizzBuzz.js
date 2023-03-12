// condition : 3 types de multiples
function print(number){
  if (number%3===0 && number%5===0){
    return 'FizzBuzz';
  } else if (number%3===0){
    return 'Fizz';
  } else if (number%5===0){
    return 'Buzz';
  } else {
    return number;
  }
}
// Afficher résultat
console.log(print(18)); //Three
//console.log(print(10)); // Fiv
//console.log(print(30)); //Both
