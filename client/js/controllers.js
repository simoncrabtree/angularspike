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
