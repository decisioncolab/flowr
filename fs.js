// Load the fs (filesystem) module
var fs = require('fs');

// Read the contents of the file into memory.
fs.readFile('package.json', function (err, logData) {
    // If an error occurred, throwing it will display the exception and end our app.
    if (err) {throw err;}
    // logData is a Buffer, convert to string.
    var text = logData.toString();
    console.log(text);
    
    var results = {};
    //Break up the file into lines.
    var lines = text.split('\n');
    lines.forEach (function (line) {
        var parts = line.split (' ');
        console.log(parts.toString());
    })
});

console.log ('test');