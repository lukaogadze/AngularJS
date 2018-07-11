"use strict";
var Controllers;
(function (Controllers) {
    var Example1;
    (function (Example1) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function ($scope) {
            $scope.firstName = "John";
            $scope.lastName = "Doe";
        });
    })(Example1 = Controllers.Example1 || (Controllers.Example1 = {}));
})(Controllers || (Controllers = {}));
//# sourceMappingURL=app.js.map