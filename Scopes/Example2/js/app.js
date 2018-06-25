"use strict";
var Scope;
(function (Scope) {
    var Example2;
    (function (Example2) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function ($scope) {
            $scope.name = "John Doe";
        });
    })(Example2 = Scope.Example2 || (Scope.Example2 = {}));
})(Scope || (Scope = {}));
//# sourceMappingURL=app.js.map