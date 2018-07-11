"use strict";
var Controllers;
(function (Controllers) {
    var Example3;
    (function (Example3) {
        const app = angular.module("myApp", []);
        app.controller("personCtrl", function ($scope) {
            $scope.firstName = "John";
            $scope.lastName = "Doe";
            $scope.fullName = function () {
                return $scope.firstName + " " + $scope.lastName;
            };
        });
    })(Example3 = Controllers.Example3 || (Controllers.Example3 = {}));
})(Controllers || (Controllers = {}));
//# sourceMappingURL=personController.js.map