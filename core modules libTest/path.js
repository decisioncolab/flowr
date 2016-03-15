var path = require("path");

console.log (path.basename(__filename));

var dirJoinTest = path.join(__dirname, 'www', 'ya', 'yaya');

console.log(dirJoinTest);
