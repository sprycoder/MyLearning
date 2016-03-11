(function () {
    "use strict";

    var app = angular.module("myLearning",
                        ["dashboardModule",
                        "glossaryModule",
                        "referenceModule",
                        "knowHowModule",
                        "ngRoute"]);

    app.config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

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

        .otherwise({ redirectTo: "/dashboard" });
    });

    app.constant("MODULE_NAMES", {
        DASHBOARD: "Dashboard",
        GLOSSARY: "Glossary",
        REFERENCE: "Reference"
    });
}());