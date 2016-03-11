(function () {
    "use strict";

    var referenceDirective = function () {
        var directive = {
            restrict: "E",
            templateUrl: "app/modules/reference/reference.html"
        };
        return directive;
    };

    angular
    .module("referenceModule")
    .directive("referenceView", referenceDirective);

})();