//switch case
// if b==undefined => return english;

// example:
function greeting(name, language) {
  switch (language){
    case 'czech':
      console.log('Vitejte, '+ name);
      break;
    case 'danish':
      console.log('Velkomst, '+ name);
      break;
    case 'dutch':
      console.log('Welkom, '+ name);
      break;
    case 'estonian':
      console.log('Tere tulemast, '+ name);
      break;
    case 'finnish':
      console.log('Tervetuloa, '+ name);
      break;
    case 'flemish':
      console.log('Welgekomen, '+name);
      break;
    case 'french':
      console.log('Bienvenue, '+name);
      break;
    case 'german':
      console.log('Willkommen, '+name);
      break;
    case  'Failte':
      console.log('Failte, '+name);
      break;
    case 'italian':
      console.log('Benvenuto, '+name);
      break;
    case 'latvian':
      console.log('Gaidits, '+name);
      break;
    case 'lithuanian':
      console.log('Laukiamas, '+name);
      break;
    case 'polish':
      console.log('Witamy, '+name);
      break;
    case 'spanish':
      console.log('Bienvenido, '+name);
      break;
    case 'swedish':
      console.log('Valkommen, '+name);
      break;
    case 'welsh':
      console.log('Croeso, '+name);
      break;         
    default:
    console.log('Welcome, '+name);        
  }
}
console.log(greeting('maria','french'));