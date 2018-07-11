"use strict";
var API;
(function (API) {
    var Example2;
    (function (Example2) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function name($scope) {
            $scope.x1 = "john";
            $scope.x2 = angular.uppercase($scope.x1);
        });
    })(Example2 = API.Example2 || (API.Example2 = {}));
})(API || (API = {}));
//# sourceMappingURL=app.js.map