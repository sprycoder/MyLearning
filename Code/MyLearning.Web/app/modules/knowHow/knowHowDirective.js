(function () {
    "use strict";

    var knowHowDirective = function () {
        var directive = {
            restrict: "E",
            templateUrl: "app/modules/knowHow/knowHow.html"
        };
        return directive;
    };

    angular
    .module("knowHowModule")
    .directive("knowHowView", knowHowDirective);

})();