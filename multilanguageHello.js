// initialise un objet avec langage : salutation
const langage ={
  czech :'Vitejte', 
  danish : 'Velkomst',
  dutch : 'Welkom',
  estonian : 'Tere tulemast', 
  finnish : 'Tervetuloa',
  flemish : 'Welgekomen',
  french : 'Bienvenue',
  german : 'Willkommen',
  irish : 'Failte',
  italian : 'Benvenuto',
  latvian : 'Gaidits',
  lithuanian : 'Laukiamas',
  polish : 'Witamy', 
  spanish : 'Bienvenido', 
  swedish : 'Valkommen',
  welsh : 'Croeso', 
  english : 'Hello',
};
  // créer une fonction greeting qui prend nom + langage
  // greeting crée une boucle qui selon langage cherche dans objet la valeur correspondante
  // retourne nom + valeur
  function greeting(name,id='english'){ // si que nom : retourne : nom + english[value]
      return langage[id] + ',' + name
  };
  console.log(greeting('Maria', 'french'));
  //console.log(greeting('Maria'));
