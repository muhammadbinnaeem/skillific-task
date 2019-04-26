app.controller('notificationController', function($scope, $rootScope) {
  $rootScope.active = 'notifications';

  $scope.notifications = [
    'this is a test.',
    'this is another test.',
    'this is another another test.'
  ];
});
