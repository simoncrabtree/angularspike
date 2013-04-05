angular.module('app').
  directive('greeting', function () {
  return {
    restrict: 'E',
    template: '<div>Hello {{username}}</div>'
  };
}).
  directive('currentTime', function (dateFilter) {
  return {
    restrict: 'E',
    link: function (scope, element, attrs) {
      var dateTime = dateFilter(new Date(), 'dd/MM/yy h:mm:ss a');
      element.text("Current Time - " + dateTime);
      element.addClass('current-time');
    }
  }
});
