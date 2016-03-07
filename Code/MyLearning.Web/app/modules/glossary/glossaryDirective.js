(function () {
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

})();