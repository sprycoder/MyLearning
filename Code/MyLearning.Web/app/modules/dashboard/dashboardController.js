(function () {
    var dashboardController = function ($scope, MODULE_NAMES) {
        $scope.viewName = MODULE_NAMES.DASHBOARD;
    };

    dashboardController.inject = ["$scope", "MODULE_NAMES"];

    angular.module("dashboardModule").controller("dashboardController", dashboardController);
}());
