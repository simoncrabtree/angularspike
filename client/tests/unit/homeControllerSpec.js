describe("Home Controller", function () {


  var scope, controller, $httpBackend;

  beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
    var testShoppingList = [
      {description: "Item One"},
      {description: "Item Two"},
      {description: "Item Three"}
    ];

    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/query/shoppingList').
      respond(testShoppingList);
    scope = $rootScope.$new();
    controller = $controller(HomeController, {$scope: scope});
  }));

  it("Has a welcome message", function () {
    expect(scope.message).toBe("Hello World");
  });

  it("Shopping list items array is returned from server query", function () {
    $httpBackend.flush();

    expect(scope.shoppingList.length).toBe(3);
  });
});
