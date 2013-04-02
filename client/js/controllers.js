function AboutController ($scope) {
  $scope.version = "0.0.1";
}

function HomeController ($scope, $http) {
  $scope.message = "Hello World";

  $http.get('/query/shoppingList').success(function (data) {
    $scope.shoppingList = data;
  });
}
