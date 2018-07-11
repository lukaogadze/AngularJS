"use strict";
var Scope;
(function (Scope) {
    var Example4;
    (function (Example4) {
        const app = angular.module("myApp", []);
        app.run(function ($rootScope) {
            $rootScope.color = "blue";
        });
        app.controller("myCtrl", function ($scope) {
            $scope.color = "Red";
        });
    })(Example4 = Scope.Example4 || (Scope.Example4 = {}));
})(Scope || (Scope = {}));
//# sourceMappingURL=app.js.map