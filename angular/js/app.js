var app = angular.module('skillific', ['ngRoute']);
// socket connection
var socket = io.connect('http://localhost:3000');
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
