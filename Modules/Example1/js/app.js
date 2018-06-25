"use strict";
var Modules;
(function (Modules) {
    var Example1;
    (function (Example1) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function ($scope) {
            $scope.firstName = "John";
            $scope.lastName = "Doe";
        });
    })(Example1 = Modules.Example1 || (Modules.Example1 = {}));
})(Modules || (Modules = {}));
//# sourceMappingURL=app.js.map