newsPaper.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId)
  $scope.addReporter = function() {
    $scope.beat.reporters.push({ name: $scope.reporterName, years: $scope.reporterYears, bday: $scope.reporterBday });
    $scope.reporterName = null;
    $scope.reporterYears = null;
    $scope.reporterBday = null;
  }
});
