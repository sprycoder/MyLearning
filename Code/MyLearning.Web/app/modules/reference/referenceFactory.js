(function () {
    var referenceFactory = function ($http, appSettings) {
        var factory = {};

        factory.getReferences = function () {
            return $http.get(appSettings.serverPath + "api/reference");
        };

        return factory;
    };

    referenceFactory.inject = ["$http", "appSettings"];

    angular.module("referenceModule").factory("referenceFactory", referenceFactory);

})();