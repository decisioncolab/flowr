//
var express = require("express");
var cors = require("cors");//cross origin for APIs
var bodyParser = require ("body-parser");//middleware to format post data

var app = express();

//dummy data create for testing
var terms = [
  {
    term:"term1",
    definition: "definition1"
  },
  {
    term:"term2",
    definition: "definition2"
  },
  {
    term:"term3",
    definition: "definition3"
  },
  {
    term:"term4",
    definition: "definition4"
  }
];

app.use (bodyParser.json());
app.use (bodyParser.urlencoded({extended: false}));//set to true if large amounts of nested post data

app.use(function(req, res, next){
    console.log(`${req.method} request for ${req.url} - ${JSON.stringify(req.body)}`);
    next(); //to move on to the next piece of middleware
});

app.use (express.static ("./public"));

//add cross origin to our api
app.use(cors());

//create get rest api endpoint
app.get("/term-api" , function(req, res){
  res.json(terms);
});

//handle post request made by html form
app.post ("/term-post", function(req, res){
  console.log(req.body);
  terms.push(req.body);
  res.json(terms);
});

/*
app.delete ("/term-api", function (req, res){
});
*/

app.listen(3000);

console.log("Express app running on port 3000");
module.exports = app;
