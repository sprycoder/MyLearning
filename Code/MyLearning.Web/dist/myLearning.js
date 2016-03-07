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
        .when('/dashboard', {
            controller: "dashboardController",
            template: "<dashboard-view></dashboard-view>"
        })

        .when('/glossary', {
            controller: "glossaryController",
            template: "<glossary-view></glossary-view>"
        })

        .when('/reference', {
            controller: "referenceController",
            template: "<reference-view></reference-view>"
        })

        .when('/knowhow', {
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
}());;(function () {

    var dashboardModule = angular.module("dashboardModule", []);

}());
;(function () {

    var glossaryModule = angular.module("glossaryModule", []);

}());;(function () {

    var knowHowModule = angular.module("knowHowModule", []);

}());
;(function () {

    var referenceModule = angular.module("referenceModule", ["ngAnimate"]);

}());;(function () {
    var dashboardController = function ($scope, MODULE_NAMES) {
        $scope.viewName = MODULE_NAMES.DASHBOARD;
    };

    dashboardController.inject = ["$scope", "MODULE_NAMES"];

    angular.module("dashboardModule").controller("dashboardController", dashboardController);
}());
;(function () {
    'use strict';

    var directive = function () {
        var directive = {
            restrict: 'E',
            templateUrl: "app/modules/dashboard/dashboard.html"
        };
        return directive;
    };

    angular
    .module('dashboardModule')
    .directive('dashboardView', directive);

})();;(function () {
    var glossaryFactory = function ($http) {
        var factory = {};

        factory.getGlossaries = function () {
            return $http.get("http://localhost:62826/api/glossary");
        };

        return factory;
    };

    glossaryFactory.inject = ["$http"];

    angular.module("glossaryModule").factory("glossaryFactory", glossaryFactory);
})();;(function () {
    var glossaryController = function ($scope, MODULE_NAMES, glossaryFactory) {

        $scope.data = {};
        $scope.viewName = MODULE_NAMES.GLOSSARY;

        function init() {
            glossaryFactory.getGlossaries()
                .success(function (glossaries) {
                    $scope.data.glossaryItems = glossaries;
                })
                .error(function (data, status, headers, config) {
                    console.log(data, status);
                });
        }

        init();
    };

    glossaryController.inject = ["$scope", "MODULE_NAMES", "glossaryFactory"];

    angular.module("glossaryModule").controller("glossaryController", glossaryController);

}());;(function () {
    'use strict';

    var glossaryDirective = function () {
        var directive = {
            restrict: 'E',
            templateUrl: "app/modules/glossary/glossary.html"
        };
        return directive;
    };

    angular
    .module('glossaryModule')
    .directive('glossaryView', glossaryDirective);

})();;(function () {
    var knowHowController = function () { };

    angular.module("knowHowModule").controller("knowHowController", knowHowController);
}());
;(function () {
    'use strict';

    var knowHowDirective = function () {
        var directive = {
            restrict: 'E',
            templateUrl: "app/modules/knowHow/knowHow.html"
        };
        return directive;
    };

    angular
    .module('knowHowModule')
    .directive('knowHowView', knowHowDirective);

})();;(function () {
    var referenceController = function ($scope, MODULE_NAMES, referenceFactory) {

        $scope.data = {};
        $scope.viewName = MODULE_NAMES.REFERENCE;

        function init() {
            referenceFactory.getReferences()
                .success(function (references) {
                    $scope.data.referenceItems = references;
                })
                .error(function (data, status, headers, config) {
                    console.log(data, status);
                });
        }

        init();
    };

    referenceController.inject = ["$scope", "MODULE_NAMES", "referenceFactory"];

    angular.module("referenceModule").controller("referenceController", referenceController);

}());;(function () {
    'use strict';

    var referenceDirective = function () {
        var directive = {
            restrict: 'E',
            templateUrl: "app/modules/reference/reference.html"
        };
        return directive;
    };

    angular
    .module('referenceModule')
    .directive('referenceView', referenceDirective);

})();;(function () {
    angular.module("referenceModule").factory("referenceFactory", ["$http",
        function ($http) {
            var factory = {};

            factory.getReferences = function () {
                return $http.get("http://localhost:62826/api/reference");
            };

            return factory;
        }]);
})();;(function () {
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