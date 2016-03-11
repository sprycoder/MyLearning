(function () {
    "use strict";

    var directive = function () {
        var directive = {
            restrict: "E",
            templateUrl: "app/modules/dashboard/dashboard.html"
        };
        return directive;
    };

    angular
    .module("dashboardModule")
    .directive("dashboardView", directive);
})();