/**
 * controller: settingsCtrl
 */
dogtalk.controller("settingsCtrl",
['$scope', '$route', '$routeParams', '$rootScope',
function ($scope, $route, $routeParams, $rootScope) {

  $scope.sockethubSettings = function () {
    $rootScope.$broadcast('showModalSockethubSettings', { locked: false });
  };

  $scope.xmppSettings = function () {
    $rootScope.$broadcast('showModalSettingsXmpp', { locked: false });
  };

  $scope.ircSettings = function () {
    $rootScope.$broadcast('showModalSettingsIrc', { locked: false });
  };

}]);