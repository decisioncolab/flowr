var EventEmitter= require('events').EventEmitter;
var util = require ('util');

//Create js obkject (objects are functions)
var Person = function (name){
  this.name=name;
};

//add event emmiter to Person
util.inherits (Person, EventEmitter);

module.exports = Person;
