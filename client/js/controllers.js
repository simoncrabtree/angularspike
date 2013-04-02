function AboutController ($scope) {
  $scope.version = "0.0.1";
}

function HomeController ($scope) {
  $scope.message = "Hello World";

  $scope.shoppingList = [
    {description: "Baked beans"},
    {description: "Toilet roll"},
    {description: "Eggs"}
  ];
}
