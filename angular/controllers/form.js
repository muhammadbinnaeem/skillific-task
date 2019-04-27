app.controller('formController', function($scope, $http, $rootScope) {
  $rootScope.active = '';

  $scope.form = {
    message: undefined
  };

  $scope.notify = function() {
    if (!$scope.form.message) {
      alert('Message is required.');
      return;
    }
    // create notification
    $http.post('http://localhost:3000/api/notifications', $scope.form).then(
      function(response) {
        $scope.form.message = '';
      },
      function(error) {
        console.log(error);
      }
    );
  };
});
