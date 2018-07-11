"use strict";
var Events;
(function (Events) {
    var Example4;
    (function (Example4) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function ($scope) {
            $scope.showMe = false;
            $scope.myFunc = function () {
                $scope.showMe = !$scope.showMe;
            };
        });
    })(Example4 = Events.Example4 || (Events.Example4 = {}));
})(Events || (Events = {}));
//# sourceMappingURL=app.js.map