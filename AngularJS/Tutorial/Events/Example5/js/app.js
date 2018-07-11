"use strict";
var Events;
(function (Events) {
    var Example5;
    (function (Example5) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function ($scope) {
            $scope.myFunc = function (event) {
                $scope.x = event.clientX;
                $scope.y = event.clientY;
            };
        });
    })(Example5 = Events.Example5 || (Events.Example5 = {}));
})(Events || (Events = {}));
//# sourceMappingURL=app.js.map