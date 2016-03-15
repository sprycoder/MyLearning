(function () {
    "use strict";

    var notificationServ = function ($timeout) {
        var currentAlerts = [];
        var alertTypes = ["info", "warning", "success", "danger"];

        var addAlert = function (type, message) {
            var alert = { type: type, message: message };
            currentAlerts.push(alert);

            $timeout(function () {
                removeAlert(alert);
            }, 5000);
        };

        var removeAlert = function (alert) {
            for (var counter = 0; counter < currentAlerts.length; counter++) {
                if (currentAlerts[counter] === alert) {
                    currentAlerts.splice(counter, 1);
                    break;
                }
            }
        };

        var serverErrorHandler = function (type, message) {
            var alert;
            if (message.data === null) {
                alert = { type: type, message: "MyLearning: Web server not reachable" };
            } else {
                alert = {
                    type: type,
                    message: message ? message.data.message : "Error thrown by web server while accessing data."
                };
            }
            currentAlerts.push(alert);
        };

        var addWarning = function (message) {
            addAlert("warning", message);
        };

        var addInfo = function (message) {
            addAlert("info", message);
        };

        var addSuccess = function (message) {
            addAlert("success", message);
        };

        var addDanger = function (message) {
            addAlert("danger", message);
        };

        return {
            currentAlerts: currentAlerts,
            removeAlert: removeAlert,
            addAlert: addAlert,
            addInfo: addInfo,
            addWarning: addWarning,
            addSuccess: addSuccess,
            addDanger: addDanger,
            serverErrorHandler: serverErrorHandler
        };
    };

    angular.module("myLearning").factory("notification", notificationServ);
}());