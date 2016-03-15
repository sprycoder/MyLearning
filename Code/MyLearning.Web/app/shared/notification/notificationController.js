(function () {
    "use strict";

    angular
      .module("myLearning")
      .controller("notificationController", notificationController);

    notificationController.$inject = ["$scope"];

    function notificationController($scope, notification) {
        $scope.removeAlert = function (alert) {
            notification.removeAlert(alert);
        };

        $scope.isCollapsed = true;
    }
})();
