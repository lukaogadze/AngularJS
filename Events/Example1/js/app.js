"use strict";
var Events;
(function (Events) {
    var Example1;
    (function (Example1) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function ($scope) {
            $scope.count = 0;
        });
    })(Example1 = Events.Example1 || (Events.Example1 = {}));
})(Events || (Events = {}));
//# sourceMappingURL=app.js.map