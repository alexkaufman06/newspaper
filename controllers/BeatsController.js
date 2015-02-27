newsPaper.controller('BeatsCtrl', function BeatsCtrl($scope, BeatsFactory) {
  $scope.beats = BeatsFactory.beats;
  $scope.BeatsFactory = BeatsFactory;
});
