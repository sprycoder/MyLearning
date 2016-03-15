(function () {
    angular.module("myLearning")
        .config(function ($provide) {
            $provide.decorator("$exceptionHandler",
                function ($delegate, $injector) {
                    return function (exception, cause) {
                        $delegate(exception, cause);

                        var notification = $injector.get("notification")
                        notification.addDanger(exception.message);
                    };
                });
        });
}());