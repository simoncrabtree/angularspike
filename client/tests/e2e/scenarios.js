describe("Application", function () {
  describe("Home View", function () {
    beforeEach(function () {
      browser().navigateTo("../../index.html");
    });

    it("Should display Home Page", function () {
      expect(element('#message').text()).toBe("Welcome to the app");
    });
  });
});
