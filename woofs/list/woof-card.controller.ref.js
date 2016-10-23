angular.module('woof').controller('woofCardCtrl', function ($scope, Woofs) {
  $scope.toggleStar = function () {
    Woofs.toggleStar($scope.woof);
  };
});
