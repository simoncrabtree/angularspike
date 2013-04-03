angular.module('app', []).
  config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/home', {controller: HomeController, templateUrl: 'partials/home.html'}).
    when('/about', {controller: AboutController, templateUrl: 'partials/about.html'}).
    when('/addShoppingListItem', {controller: AddShoppingListItemController, templateUrl: 'partials/addShoppingListItem.html'}).
    otherwise({redirectTo: '/home'});
}]);
