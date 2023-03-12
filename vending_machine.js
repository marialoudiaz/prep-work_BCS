// Snack object
const snack = { 
  1 : ['Espresso', 1], 
  2 : ['Cappuccino',2.5], 
  3 : ['Chocolate',2], 
  4 : ['Potato_chips',3.5] 
};
//take number of snack + amount & iterate thru const snack
function vendingMachine(number,amount){  
// if number corresponds to a snack && amount too
if (snack[number]!== undefined && amount === snack[number][1]){
  return 'Your' + ' ' + (snack[number][0]) + ' ' + 'has been served' 
}
// if snack exists but gave more change
else if (snack[number]!== undefined && amount > snack[number][1]){
  return 'Your' + ' ' + (snack[number][0]) + ' ' + 'has been served' + ' ' + 'and here is your' + ' ' + (amount - (snack[number][1])) + ' ' +  'dollars' 
}
//if number doesn't correspond to any snack
else if (snack[number]==undefined ){
  return 'Sorry this snack is not available'
}
// if amount put < to price of snack
else if (amount < snack[number][1]){
  return 'Sorry, you need to insert more coins'
};
};
console.log(vendingMachine(1,3));

