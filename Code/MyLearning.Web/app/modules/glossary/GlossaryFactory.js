(function () {
    var glossaryFactory = function ($http, appSettings) {
        var factory = {};

        factory.getGlossaries = function () {
            return $http.get(appSettings.serverPath +"api/glossary");
        };

        return factory;
    };

    glossaryFactory.inject = ["$http", "appSettings"];

    angular.module("glossaryModule").factory("glossaryFactory", glossaryFactory);
})();