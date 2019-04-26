app.controller('formController', function($scope, $rootScope) {
  $rootScope.active = '';

  $scope.form = {
    message: undefined
  };

  $scope.notify = function() {
    console.log($scope.form.message);
    $scope.form.message = '';
  };
});
