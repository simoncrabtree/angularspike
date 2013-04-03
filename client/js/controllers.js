function AboutController ($scope) {
  $scope.version = "0.0.1";
}

function HomeController ($scope, $http) {

  $scope.username = "Simon";

  $http.get('/query/shoppingList').success(function (data) {
    $scope.summaryMessage = data.summaryMessage;
    $scope.shoppingList = data.shoppingListItems;
  });
}

function AddShoppingListItemController ($scope, $http) {
  $scope.command = {};

  $scope.isUnchanged = function (item) {
    return !$scope.command.description;
  }

  $scope.addItem = function () {
    console.log("Executing command", $scope.command);

    $http.post('/command/addItemToShoppingList', $scope.command);
    $scope.command = {};
    window.history.back();
  }
}
