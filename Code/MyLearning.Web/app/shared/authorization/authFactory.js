(function () {
    "use strict";

    var authFactory = function (appSettings, $http, $q) {
        return {
            initUser: function () {
                return $http.get(appSettings.serverPath + "api/authorization")
                .then(function (response) {
                    if (typeof response.data === "object") {
                        return response.data;
                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }
                }, function (response) {
                    // something went wrong
                    return $q.reject(response.data);
                });
            }
        };
    }

    angular.module("myLearning").factory("authFactory", authFactory);
}());