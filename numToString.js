// write a function which takes one argument which is a number
// and returns the same value as a string
let num = 0;
let str = 0;
function numToString(num){
  str = num.toString()
  return str;
}
console.log(numToString(10));
console.log(typeof(str));
