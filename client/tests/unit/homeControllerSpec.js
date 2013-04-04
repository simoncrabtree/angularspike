describe("Home Controller", function () {


  var scope, controller, server;

  beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
    var eventStream = [
      {type: 'addItemToShoppingList', data: {description: 'Item One'}},
      {type: 'addItemToShoppingList', data: {description: 'Item One'}},
      {type: 'addItemToShoppingList', data: {description: 'Item One'}}
    ];

      server = _$httpBackend_;
      server.expectGET('/events/0').
      respond(eventStream);
      scope = $rootScope.$new();
      controller = $controller(HomeController, {$scope: scope});
  }));

  it("Has a hardcoded user name", function () {
    expect(scope.username).toBe('Simon');
  });

  it("Event stream is returned from server", function () {
  });
});
