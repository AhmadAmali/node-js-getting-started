var express = require('express');
var app = express();
app.use(express.static(__index.html + '/public'));
var port = 8000;
app.listen(port);
console.log('server on' + port);