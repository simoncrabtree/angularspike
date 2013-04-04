
var shoppingList = {};
var cupboard = {};

var eventHandlers = {
  'itemAddedToShoppingList': function (data) {
    console.log("Added Item ToShopping List", data);
    shoppingList[data.id] = {id: data.id, description: data.description};
  },
  'itemPurchased': function (data) {
    cupboard[data.id] = {id: data.id, description: shoppingList[data.id].description, quantity: data.quantity}
    delete shoppingList[data.id];
    console.log("Cupboard", cupboard);
  }
}

function AboutController ($scope) {
  $scope.version = "0.0.1";
}

function HomeController ($scope, $http) {

  $scope.username = "Simon";
  $scope.shoppingList = shoppingList;
  $scope.cupboard = cupboard;

  $http.get('/events').success(function (events) {
    events.forEach(function (evt) {
      if (!eventHandlers[evt.type]) {
        console.warn("Event:", evt.type, " - no event handler has been implemented");
      } else {
        eventHandlers[evt.type](evt.data);
      }
    });
  });
}

function AddShoppingListItemController ($scope, $http) {
  $scope.command = {};

  $scope.isUnchanged = function (item) {
    return !$scope.command.description;
  }

  $scope.addItem = function () {
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });

    $scope.command.uuid = uuid;
    console.log("Executing command", $scope.command);

    $http.post('/command/addItemToShoppingList', $scope.command);
    $scope.command = {};
    window.history.back();
  }
}

function PurchaseItemController ($scope, $http, $routeParams) {
  var itemId = $routeParams.id;
  $scope.description = shoppingList[itemId].description;

  $scope.execute = function () {
    $http.post('/command/purchaseItem', {id: itemId});
    window.history.back();
  }
}
