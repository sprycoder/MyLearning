(function () {

    var notificationDirective = function (notification) {

        return {
            restrict: "E",
            scope: true,
            templateUrl: "app/shared/notification/notification.html",
            controller: function ($scope) {
                $scope.removeAlert = function (alert) {
                    notification.removeAlert(alert);
                };

                $scope.isCollapsed = true;
            },
            link: function (scope) {
                scope.currentAlerts = notification.currentAlerts;
            }
        };
    };

    angular.module("myLearning")
           .directive("notificationView", notificationDirective);
})();
