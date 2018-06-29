"use strict";
var Services;
(function (Services) {
    var Example3;
    (function (Example3) {
        // Cross-Origin Request Blocked..... fk
        const app = angular.module("myApp", []);
        app.controller("myCtrl", ($scope, $timeout) => {
            $scope.myHeader = "Hello World!";
            $timeout(() => {
                $scope.myHeader = "How are you today?";
            }, 2000);
        });
    })(Example3 = Services.Example3 || (Services.Example3 = {}));
})(Services || (Services = {}));
//# sourceMappingURL=app.js.map