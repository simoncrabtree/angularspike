describe("Home Controller", function () {


  var scope, controller, server;

  beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
    var testShoppingList = {
      summaryMessage: "You need to purchase 3 Items",
      shoppingListItems: [
        {description: "Item One"},
        {description: "Item Two"},
        {description: "Item Three"}
      ]};

      server = _$httpBackend_;
      server.expectGET('/query/shoppingList').
        respond(testShoppingList);
      scope = $rootScope.$new();
      controller = $controller(HomeController, {$scope: scope});
  }));

  it("Summary message is returned from server query", function () {
    expect(scope.summaryMessage).toBeUndefined();
    server.flush();

    expect(scope.summaryMessage).toBe("You need to purchase 3 Items");
  });

  it("Shopping list items array is returned from server query", function () {
    expect(scope.shoppingList).toBeUndefined();
    server.flush();

    expect(scope.shoppingList.length).toBe(3);
  });
});
