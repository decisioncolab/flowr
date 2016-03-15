var Person = require ('./lib/Person');

var diogo = new Person ("Diogo Leite");

diogo.on ('speak', function(said){
  console.log(`${this.name} : ${said}`);
});

diogo.emit('speak', 'go and speak it out!');
