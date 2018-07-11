"use strict";
var Scope;
(function (Scope) {
    var Example3;
    (function (Example3) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function ($scope) {
            $scope.names = ["Emil", "Tobias", "Linus"];
        });
    })(Example3 = Scope.Example3 || (Scope.Example3 = {}));
})(Scope || (Scope = {}));
//# sourceMappingURL=app.js.map