describe("Home Controller", function () {

  it("Has a welcome message", function () {
    var scope = {},
    controller = new HomeController(scope);

    expect(scope.message).toBe("Hello World");
  });

  it("Has a shopping list items array", function () {
    var scope = {},
    controller = new HomeController(scope);

    expect(scope.shoppingList.length).toBe(3);
  });
});
