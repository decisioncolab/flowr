var express = require('express'), app = express();
//Static Server
app.use(express.static(__dirname + '/public'));
app.listen(8081);
