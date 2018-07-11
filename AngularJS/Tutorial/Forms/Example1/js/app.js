"use strict";
var Forms;
(function (Forms) {
    var Example1;
    (function (Example1) {
        const app = angular.module("myApp", []);
        app.controller("formCtrl", function ($scope) {
            $scope.firstName = "John";
        });
    })(Example1 = Forms.Example1 || (Forms.Example1 = {}));
})(Forms || (Forms = {}));
//# sourceMappingURL=app.js.map