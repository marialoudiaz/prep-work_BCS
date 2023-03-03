// function takes 1 argument
// argument is a total price with IVA
function noIVA(number){
// function subtracts iva from total price
let calc = number/1.21;
return calc.toFixed(2);
};
// returns the price without iva
console.log(noIVA(20)+'€');

