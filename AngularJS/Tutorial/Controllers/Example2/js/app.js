"use strict";
var Controllers;
(function (Controllers) {
    var Example2;
    (function (Example2) {
        const app = angular.module("myApp", []);
        app.controller("personCtrl", function ($scope) {
            $scope.firstName = "John";
            $scope.lastName = "Doe";
            $scope.fullName = function () {
                return $scope.firstName + " " + $scope.lastName;
            };
        });
    })(Example2 = Controllers.Example2 || (Controllers.Example2 = {}));
})(Controllers || (Controllers = {}));
//# sourceMappingURL=app.js.map