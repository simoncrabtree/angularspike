describe("About View Controller", function () {
  it("Exposes a version number", function () {
    var scope = {},
    ctrl = new AboutController(scope);

    expect(scope.version).toBe("0.0.1");
  });
});
