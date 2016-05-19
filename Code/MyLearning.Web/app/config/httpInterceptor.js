(function () {
    "use strict";

    var httpInterceptor = function ($rootScope, $q, notification) {
        return {
            response: function (response) {
                if (response.config.method === "POST") {
                    if (response.data !== null) {
                        notification.addSuccess(response.data);
                    }
                }
                return response;
            },
            responseError: function (response) {
                var httpStatusCode = response.status !== undefined ? response.status : 400;
                var message = (typeof response === "object") ? response.data.exceptionMessage : response;
                switch (httpStatusCode) {
                    case 500:
                        notification.addDanger(message);
                        break;
                    case -1:
                        notification.addDanger(message);
                        break;
                    default:
                        if (response.config.method === "POST") {
                            if (response.data !== null) {
                                notification.addWarning(response.data);
                            }
                        }

                }
                return $q.reject(response);
            }
        };
    };

    angular.module("myLearning").factory("httpInterceptor", httpInterceptor);
}());