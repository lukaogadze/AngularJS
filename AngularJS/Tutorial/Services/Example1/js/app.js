"use strict";
var Services;
(function (Services) {
    var Example1;
    (function (Example1) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", ($scope, $location) => {
            $scope.myUrl = $location.absUrl();
        });
    })(Example1 = Services.Example1 || (Services.Example1 = {}));
})(Services || (Services = {}));
//# sourceMappingURL=app.js.map