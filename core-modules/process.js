//process Object
console.log("*****************************Process Object");
console.log(process.argv);
//start with: node global --user Diogo --greeting "Hey"
console.log(process);
//grab input
function grab (flag){
  var index=process.argv.indexOf(flag);
  return (index===null) ? null : process.argv[index+1];
}
var greeting = grab ('--greeting');
var user = grab ('--user');

if (!user || !greeting){
  console.log("Ná!");
} else {
  console.log(`ah  ${greeting} ${user} well`);
}
//Standard input and output Objects
process.stdout.write("Hey \n \n \n");
process.stdout.clearLine();

//Global timing functions
var waitTime=3000;//3secs
var currentTime= 0;
var waitInterval =500;//1/2 sec

console.log("wait for it");

var interval = setInterval(function(){
  currentTime += waitInterval;
  console.log (`waiting ${currentTime/1000} seconds`);
},waitInterval);

setTimeout (function(){
  clearInterval (interval);
  console.log("Done");
},waitTime);
