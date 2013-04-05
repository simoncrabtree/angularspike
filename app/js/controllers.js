var nextEventId = 0;
var shoppingList = {};
var cupboard = {};

var eventHandlers = {
  'itemAddedToShoppingList': function (data) {
    shoppingList[data.id] = {id: data.id, description: data.description};
  },
  'itemPurchased': function (data) {
    cupboard[data.id] = {id: data.id, description: shoppingList[data.id].description, quantity: data.quantity}
    delete shoppingList[data.id];
  }
}

function generateUUID () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
}

function MainController ($scope, $http) {
  $scope.$on('$routeChangeSuccess', function (evt, current, previous) {
    console.log("RouteChangeSuccess", current.navname);
    if (current.navname) {
      $scope.selectedNavBarItem = current.navname;
    }
  });
  $scope.isActive = function (navbarName) {
    if (navbarName === $scope.selectedNavBarItem) {
      return 'active';
    }
  }
  $scope.username = "Simon Crabtree";

  $scope.getEvents = function () {
    $http.get('/events/' + nextEventId).success(function (events) {
      events.forEach(function (evt) {
        if (!eventHandlers[evt.type]) {
          console.warn("Event:", evt.type, " - no event handler has been implemented");
        } else {
          eventHandlers[evt.type](evt.data);
        }
        nextEventId++;
      });
    });
  }

  $scope.getEvents();
}

function AboutController ($scope) {
  $scope.version = "0.0.1";
}

function HomeController ($scope) {
  $scope.shoppingList = shoppingList;
  $scope.shoppingListItemCount = function () {
    return Object.keys(shoppingList).length;
  }
  $scope.cupboard = cupboard;
}

function AddShoppingListItemController ($scope, $http) {
  $scope.command = {};

  $scope.isUnchanged = function (item) {
    return !$scope.command.description;
  }

  $scope.addItem = function () {
    $scope.command.uuid = generateUUID();

    $http.post('/command/addItemToShoppingList', $scope.command).success(function () {
      $scope.getEvents();
    });
    window.history.back();
  }
}

function PurchaseItemController ($scope, $http, $routeParams) {
  var itemId = $routeParams.id;
  $scope.description = shoppingList[itemId].description;

  $scope.execute = function () {
    $http.post('/command/purchaseItem', {id: itemId}).success(function () {
      $scope.getEvents();
    });
    window.history.back();
  }
}
