"use strict";
var Events;
(function (Events) {
    var Example3;
    (function (Example3) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function ($scope) {
            $scope.count = 0;
            $scope.myFunction = function () {
                $scope.count++;
            };
        });
    })(Example3 = Events.Example3 || (Events.Example3 = {}));
})(Events || (Events = {}));
//# sourceMappingURL=app.js.map