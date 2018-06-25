"use strict";
var Scope;
(function (Scope) {
    var Example1;
    (function (Example1) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function ($scope) {
            $scope.carname = "Volvo";
        });
    })(Example1 = Scope.Example1 || (Scope.Example1 = {}));
})(Scope || (Scope = {}));
//# sourceMappingURL=app.js.map