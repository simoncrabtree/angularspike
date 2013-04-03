describe("Application", function () {
  it("Default page is the Home View", function () {
      browser().navigateTo('../../index.html');
      expect(browser().location().url()).toBe('/home');
  });

  describe("Home View", function () {
    beforeEach(function () {
      browser().navigateTo("../../index.html#/home");
    });

    it("Should display Home Page", function () {
      expect(element('#message').text()).toBe("You need to purchase 3 Items");
    });

    it("Displays the shopping list items", function () {
      expect(repeater('.shopping-list li').count()).toBe(3);
    });
  });

  describe("About View", function () {
    it("Is reached from #/about", function () {
      browser().navigateTo('../../index.html#/about');
      expect(browser().location().url()).toBe('/about');
    });
  });

  describe("Greeting widget", function () {
    it("Displays the username", function () {
      browser().navigateTo('../../index.html#/widgets');
      expect(element('#greeting1').text()).toBe("Hello Joe Smith");
    });
  });
});
