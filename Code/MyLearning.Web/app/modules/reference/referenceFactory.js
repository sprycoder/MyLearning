(function () {
    angular.module("referenceModule").factory("referenceFactory", ["$http",
        function ($http) {
            var factory = {};

            factory.getReferences = function () {
                return $http.get("http://localhost:62826/api/reference");
            };

            return factory;
        }]);
})();