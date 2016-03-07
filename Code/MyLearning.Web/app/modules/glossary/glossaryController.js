(function () {
    var glossaryController = function ($scope, MODULE_NAMES, glossaryFactory) {

        $scope.data = {};
        $scope.viewName = MODULE_NAMES.GLOSSARY;

        function init() {
            glossaryFactory.getGlossaries()
                .success(function (glossaries) {
                    $scope.data.glossaryItems = glossaries;
                })
                .error(function (data, status, headers, config) {
                    console.log(data, status);
                });
        }

        init();
    };

    glossaryController.inject = ["$scope", "MODULE_NAMES", "glossaryFactory"];

    angular.module("glossaryModule").controller("glossaryController", glossaryController);

}());