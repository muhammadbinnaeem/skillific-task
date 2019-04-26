var app = angular.module('skillific', ['ngRoute']);

app.run();

app.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/form.html',
        controller: 'formController'
      })
      .when('/notifications', {
        templateUrl: 'views/notification.html',
        controller: 'notificationController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
