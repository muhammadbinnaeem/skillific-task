app.controller('notificationController', function($scope, $http, $rootScope) {
  $rootScope.active = 'notifications';
  // on message recieved
  socket.on('message', function(message) {
    $scope.notifications.push(message.data);
    $rootScope.newNotification = 1;
    $scope.$apply();
  });
  // fetch notifications
  $http.get('http://localhost:3000/api/notifications', {}).then(
    function(response) {
      $scope.notifications = response.data;
    },
    function(error) {
      console.log(error);
    }
  );
});
