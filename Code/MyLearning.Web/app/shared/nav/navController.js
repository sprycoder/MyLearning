(function () {
    var navController = function ($scope, MODULE_NAMES) {
        $scope.moduleNames = MODULE_NAMES;

        $scope.changeActiveNav = function (event) {
            //var parentTarget = event.currentTarget,
            //target = event.target;

            //if (target.tagName === "A") {
            //    $(parentTarget).find("li").removeClass("active");
            //    $(target).find("li").addClass("active");
            //}
        };
    };

    navController.inject = ["$scope", "MODULE_NAMES"];

    angular.module("myLearning").controller("navController", navController);
}());