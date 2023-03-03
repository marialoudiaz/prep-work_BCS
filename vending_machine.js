//write a function called vendingMachine
function vendingMachine(amount, snack){
  switch (amount, snack){
  case 'Espresso':
      console.log('Your Espresso has been served');
      break;
  case 'Cappuccino':
      console.log('Your Cappuccino has been served');
      break;
  case 'Chocolate bar':
    console.log('Your Chocolate bar has been served');
    break;
  case 'Potato Chips':
      console.log('Your Potato Chips has been served');
      break;
  default:
    console.log('Sorry, selected snack is not available')

};
};
console.log(vendingMachine('1','Espresso'));
// If selected snack = more expensive than the money amount given // return: "Sorry, you have to insert more coins"

