"use strict";
var API;
(function (API) {
    var Example1;
    (function (Example1) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function name($scope) {
            $scope.x1 = "JOHN";
            $scope.x2 = angular.lowercase($scope.x1);
        });
    })(Example1 = API.Example1 || (API.Example1 = {}));
})(API || (API = {}));
//# sourceMappingURL=app.js.map