(function () {
    var glossaryFactory = function ($http) {
        var factory = {};

        factory.getGlossaries = function () {
            return $http.get("http://localhost:62826/api/glossary");
        };

        return factory;
    };

    glossaryFactory.inject = ["$http"];

    angular.module("glossaryModule").factory("glossaryFactory", glossaryFactory);
})();