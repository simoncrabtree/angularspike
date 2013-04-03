var express = require('express');
var server = express();

server.use(express.static(__dirname + '/client'));
server.use(express.bodyParser());

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

server.post('/command/addItemToShoppingList', function (req, res) {
    var command = req.body;
    shoppingListViewModel.shoppingListItems.push({
        description: command.description
    });
    res.end('Added item to shopping list');
});

server.listen(3000);
console.log("Server running on port 3000");
