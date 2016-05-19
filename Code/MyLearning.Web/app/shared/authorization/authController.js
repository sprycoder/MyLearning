(function () {
    "use strict";

    var authController = function (authFactory, $rootScope, $location) {
        var vm = this;
        vm.userName = "";
        vm.authUser = function () {
            authFactory.initUser().then(function (data) {
                sessionStorage.clear();
                if (data && data.isAuthenticated) {
                    sessionStorage.setItem("user.name", data.Name);
                    sessionStorage.setItem("user.userId", data.UserId);
                    $rootScope.broadcast("REFRESH");
                } else if (data && !data.isAuthenticated){
                    sessionStorage.setItem("user.name", data.Name);
                    sessionStorage.setItem("user.userId", data.UserId);
                    $location.path("error403");
                }
            }, function(error){
                //handle error
                console.log("error occurred at authController.")
            });
        };
    };

    $rootScope.$on("$locationChangeStart", function () {
        vm.authUser();
    });

    vm.authUser();

    authController.inject = ["authFactory", "$rootScope", "$location"];

    angular.module("myLearning").controller("authController", authController);
});