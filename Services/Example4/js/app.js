"use strict";
var Services;
(function (Services) {
    var Example4;
    (function (Example4) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", ($scope, $interval) => {
            $scope.theTime = new Date().toLocaleTimeString();
            $interval(() => {
                $scope.theTime = new Date().toLocaleTimeString();
            }, 1000);
        });
    })(Example4 = Services.Example4 || (Services.Example4 = {}));
})(Services || (Services = {}));
//# sourceMappingURL=app.js.map