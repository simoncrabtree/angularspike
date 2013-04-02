var express = require('express');
var server = express();

server.configure(function () {
    server.use(express.static(__dirname + '/client'));
});

var shoppingListViewModel = {
        summaryMessage: "You need to purchase 3 Items",
        shoppingListItems: [
            {description: "Baked beans"},
            {description: "Toilet roll"},
            {description: "Eggs"}
        ]
    };


server.get('/query/shoppingList', function (req, res) {
    res.json(shoppingListViewModel);
});

server.listen(3000);
console.log("Server running on port 3000");
