var fs = require('fs');

// Read the contents of the file into memory.
fs.readFile('./lib/testFS.json', function (err, logData) {
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

//Read synch, blocks the thread. Used to read configuration files.
var files = fs.readdirSync('./lib');
console.log(files);

//Read Asynch
fs.readdir('./lib', function(err,files){
  if (err){
    throw err;
  }
  console.log(files);
});
console.log('reading files...');

//Add content to file
var md = `
Sample markdown text
********************
Let´s add this
`;

fs.writeFile ('./lib/sample.md', md.trim(), function(err){
  console.log('File Created');
});

//file streams
var stream = fs.createReadStream("./lib/testFS.json", "UTF-8");
var data = "";
console.log("Start Reading File");

stream.once("data", function(){
  console.log("Started Reading File");
});

stream.on("data", function(chunk){
  process.stdout.write(`  chunk: ${chunk.lenght} |`);
  data+=chunk;
});
stream.on ("end", function(){
  console.log("End Reading File");
});
