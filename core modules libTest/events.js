var EventEmitter= require('events').EventEmitter;
var util = require ('util');

/*
var events = require ('events');
var emitter = new events.EventEmitter();

//create event
emitter.on('customEvent', function(message,status){
  console.log(`${status} : ${message}`);
});
//emit event
emitter.emit('customEvent', 'Hey', 200);
*/

//Create js obkject (objects are functions)
var Person = function (name){
  this.name=name;
};

//add event emmiter to Person
util.inherits (Person, EventEmitter);

//instanciate Person
var diogo=new Person("Diogo Leite");
diogo.on('speak', function(said){
  console.log(`${this.name} : ${said}`);
});

diogo.emit ('speak', 'go go speak all you can!');
