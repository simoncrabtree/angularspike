var express = require('express');
var server = express();

server.use(express.static(__dirname + '/client'));
server.use(express.bodyParser());

var eventstream = [
    {type: 'itemAddedToShoppingList', data: {id: '1', description: 'Sausages'}},
    {type: 'itemAddedToShoppingList', data: {id: '2', description: 'Baked Beans'}},
    {type: 'itemPurchased', data: {id: '1', quantity: 6}},
    {type: 'itemAddedToShoppingList', data: {id: '3', description: 'Cheddar Cheese'}},
];

server.post('/command/addItemToShoppingList', function (req, res) {
    var evt = {type: 'itemAddedToShoppingList', data: {id: req.body.uuid, timestamp: new Date(), description: req.body.description}};
    eventstream.push(evt);
    res.json(evt);
});

server.post('/command/purchaseItem', function (req, res) {
    var evt = {type: 'itemPurchased', data: {id: req.body.id, timestamp: new Date()}};
    eventstream.push(evt);
    res.json(evt);
});

server.get('/events', function (req, res) {
    res.json(eventstream);
});

server.listen(3000);
console.log("Server running on port 3000");
