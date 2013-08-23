var express = require('express');
var path = require('path');
var app = express();
var buf = new Buffer(fs.readFileSync('index.html'));
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
