var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World and Nigel C this is your day and what a fine day it is. Will you be going for a walk? Again???  Oh what a fantastic moment, It worked. Well now try again.');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
