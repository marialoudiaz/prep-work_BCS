//initialize values
let a = 0;
let b= 0;
let c =['+','-','*','/'];

let sum = 0;
let sous=0;
let mult=0;
let div=0;

//execute opération selon valeur de c
function calc(a,b,c){
  if (c.includes('+')){
    sum = a+b;
    return sum;
  } else if (c.includes('-')){
    sous= a-b;
    return sous;
  } else if (c.includes('*')){
    mult = a*b;
    return mult;
  } else if (c.includes('/')){
    div = a/b;
    return div;
  }
} 
//console.log(calc(1,2,'+'));
//console.log(calc(1,2,'-'));
//console.log(calc(1,2,'*'));
console.log(calc(1,2,'/'));