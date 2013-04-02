describe("Application", function () {
  describe("Home View", function () {
    beforeEach(function () {
      browser().navigateTo("../../index.html");
    });

    it("Should display Home Page", function () {
      expect(element('#message').text()).toBe("Welcome to the app");
    });

    it("Displays the shopping list items", function () {
      expect(repeater('.shopping-list li').count()).toBe(3);
    });
  });
});
