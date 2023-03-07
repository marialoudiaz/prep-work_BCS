// key and values
let amount = 0;
let snack = {
    1 : {
      name : 'Espresso',
      amount : 1,
    }, 
    2 : {
      name : 'Cappuccino',
      amount : 2.5,
    }, 
    3 : {
      name : 'Chocolate',
      amount : 2,
    }, 
    4 : {
      name : 'Potato_chips',
      amount : 3.5,
    }
};


function vendingMachine(snack,amount){  //take snack argument + number argument & matches w/ corresponding value
if (snack > 4) // verifie que le numero rentré est inférieur à 4 (seulement 4 snacks dispos)s 
  return 'Sorry this snack is not available'
//MARCHE PAS ////////////////
else if (amount <= Object.keys.amount) // verifie que le prix input n'est pas inférieur au prix de 
return 'Sorry, you need to insert more coins'
///////
else
return 'Your' + (snack.name) + 'has been served'// return 1 instead of name
};
console.log(vendingMachine(1,1));







