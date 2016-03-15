(function () {
    var dashboardController = function ($scope, MODULE_NAMES, notification) {
        $scope.viewName = MODULE_NAMES.DASHBOARD;

        $scope.showAlert = function () {
            notification.addAlert("danger", "I'm clicked");
        }
    };

    dashboardController.inject = ["$scope", "MODULE_NAMES"];

    angular.module("dashboardModule").controller("dashboardController", dashboardController);
}());
