(function () {
    var referenceController = function ($scope, MODULE_NAMES, referenceFactory) {

        $scope.gridOptions = {};
        $scope.viewName = MODULE_NAMES.REFERENCE;

        function init() {
            referenceFactory.getReferences()
                .success(function (references) {
                    $scope.gridOptions.data = references;
                })
                .error(function (data, status, headers, config) {
                    console.log(data, status);
                });
        }

        init();
    };

    referenceController.inject = ["$scope", "MODULE_NAMES", "referenceFactory"];

    angular.module("referenceModule").controller("referenceController", referenceController);

}());