(function () {
    "use strict";

    var app = angular.module("myLearning",
                        ["dashboardModule",
                        "glossaryModule",
                        "referenceModule",
                        "knowHowModule",
                        "ngRoute",
                        "ui.grid"]);

    app.config(function ($routeProvider, $locationProvider, $httpProvider) {

        $httpProvider.defaults.withCredentials = true;

        $locationProvider.html5Mode(true);

        $httpProvider.interceptors.push("httpInterceptor");

        $routeProvider
        .when("/dashboard", {
            controller: "dashboardController",
            template: "<dashboard-view></dashboard-view>"
        })

        .when("/glossary", {
            controller: "glossaryController",
            template: "<glossary-view></glossary-view>"
        })

        .when("/reference", {
            controller: "referenceController",
            template: "<reference-view></reference-view>"
        })

        .when("/knowhow", {
            controller: "knowHowController",
            template: "<know-how-view></know-how-view>"
        })

        .when("/error403", {
            templateUrl: "/content/errorPages/error403.html"
        })

        .when("/error404", {
            templateUrl: "/content/errorPages/error404.html"
        })

        .otherwise({ redirectTo: "/dashboard" });
    });

    app.constant("MODULE_NAMES", {
        DASHBOARD: "Dashboard",
        GLOSSARY: "Glossary",
        REFERENCE: "Reference"
    });

    app.constant("appSettings", {
        serverPath: "http://localhost:62826/"
    });

    //angular.module("myLearning")
    //    .run(["$rootScope", "$location", "authFactory", function ($rootScope, $location, authFactory) {
    //        authFactory.initUser()
    //            .then(function (data) {
    //                if (data != null && data.IsAuthenticated) {
    //                    sessionStorage.setItem("user.name", data.Name);
    //                    sessionStorage.setItem("user.userId", data.UserId);
    //                    $rootScope.$broadcast("REFRESH");
    //                } else {
    //                    $location.path("error403");
    //                }
    //            }, function (error) {
    //                console.log("Something went wrong", error);
    //                $location.path("error403");
    //            });

    //        $rootScope.$on("$routeChangeStart", function () {
    //            if (!authFactory.isLoggedIn) {
    //                authFactory.initUser();
    //            }
    //        });
    //    }])
}());