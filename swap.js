// Write a function called swap that takes one argument, an object, 
//and returns another object where the key/value pairs have been swapped. 
//The original object should not be modified.

// Example:
var obj = {
  a: 1, 
  b: 2
};
var newObje = swap(obj);
function swap(obj){
  let a = 1;
  let b = 2;
return [a, b] = [b, a];
}
console.log(swap(obj)) ;


