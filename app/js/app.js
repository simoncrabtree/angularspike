angular.module('app', []).
  config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/home', {controller: HomeController, templateUrl: 'partials/home.html', navname:'home'}).
    when('/about', {controller: AboutController, templateUrl: 'partials/about.html', navname:'about'}).
    when('/addShoppingListItem', {controller: AddShoppingListItemController, templateUrl: 'partials/addShoppingListItem.html'}).
    when('/purchaseItem/:id', {controller: PurchaseItemController, templateUrl: 'partials/purchaseItem.html'}).
    otherwise({redirectTo: '/home'});
}]);

