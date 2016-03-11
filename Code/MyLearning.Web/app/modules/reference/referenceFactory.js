(function () {
    var referenceFactory = function ($http) {
        var factory = {};

        factory.getReferences = function () {
            return $http.get("http://localhost:62826/api/reference");
        };

        return factory;
    };

    referenceFactory.inject = ["$http"];

    angular.module("referenceModule").factory("referenceFactory", referenceFactory);

})();