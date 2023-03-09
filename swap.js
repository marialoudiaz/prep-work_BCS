// Write a function called swap that takes one argument, an object, and returns another object where the key/value pairs have been swapped. 
/*/ Example:
var obj = {
  a: 1, 
  b: 2
};
function swap(obj){
  let a = 1;
  let b = 2;
return [a, b] = [b, a];
}
//console.log(swap(obj)) ;
*/

//create an object
let myObj = {key1:'value1', key2:'value2'};

//declare a swap function
function swap (myObj){
  for (let [key,value] of Object.entries(myObj)){
  myObj[value] = key;
  delete myObj[key]
  myObj[key] = value;
  delete myObj[value];
return myObj
};
}

console.log(swap ({name:'bob',lastname:'smith'}));
//console.log(swap ({a:1,b:2}));

