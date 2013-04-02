var express = require('express');
var server = express();

server.configure(function () {
    server.use(express.static(__dirname + '/client'));
});

server.get('/query/shoppingList', function (req, res) {
    res.json([
        {description: "Baked beans"},
        {description: "Toilet roll"},
        {description: "Eggs"}
    ]);
});

server.listen(3000);
console.log("Server running on port 3000");
