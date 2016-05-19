(function () {
    var navController = function ($scope, MODULE_NAMES, authFactory, $location, $rootScope) {
        var vm = this;
        $scope.moduleNames = MODULE_NAMES;

        $scope.changeActiveNav = function (event) {
            //var parentTarget = event.currentTarget,
            //target = event.target;

            //if (target.tagName === "A") {
            //    $(parentTarget).find("li").removeClass("active");
            //    $(target).find("li").addClass("active");
            //}
        };

        vm.authUser = function () {
            authFactory.initUser()
                    .then(function (data) {
                        if (data && data.IsAuthenticated) {
                            sessionStorage.setItem("user.name", data.Name);
                            sessionStorage.setItem("user.userId", data.UserId);
                            $rootScope.$broadcast("REFRESH");
                        } else if (data && !data.IsAuthenticated) {
                            sessionStorage.setItem("user.name", data.Name);
                            sessionStorage.setItem("user.userId", data.UserId);
                            $location.path("error403");
                        }
                    }, function (error) {
                        console.log("Something went wrong", error);
                        $location.path("error403");
                    });
        };

        $rootScope.$on("$locationChangeStart", function (event, next, current) {
            vm.authUser();
        });

        vm.authUser();
    };

    navController.inject = ["$scope", "MODULE_NAMES", "authFactory", "$location", "$rootScope"];

    angular.module("myLearning").controller("navController", navController);
}());