app.controller('notificationController', function($scope, $http, $rootScope) {
  $rootScope.active = 'notifications';
  $http.get('http://localhost:3000/api/notifications', {}).then(
    function(response) {
      $scope.notifications = response.data;
      $rootScope.notificationsCount = response.data.length;
    },
    function(error) {
      console.log(error);
    }
  );
});
