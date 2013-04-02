var express = require('express');
var server = express();

server.configure(function () {
    server.use(express.static(__dirname + '/client'));
});

server.listen(3000);
console.log("Server running on port 3000");
