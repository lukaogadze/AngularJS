"use strict";
var Routing;
(function (Routing) {
    var Example6;
    (function (Example6) {
        const app = angular.module("myApp", ["ngRoute"]);
        app.config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                templateUrl: "main.htm"
            })
                .when("/london", {
                templateUrl: "london.htm",
                controller: "londonCtrl"
            })
                .when("/paris", {
                templateUrl: "paris.htm",
                controller: "parisCtrl"
            });
        });
        app.controller("londonCtrl", function ($scope) {
            $scope.msg = "I love London";
        });
        app.controller("parisCtrl", function ($scope) {
            $scope.msg = "I love Paris";
        });
    })(Example6 = Routing.Example6 || (Routing.Example6 = {}));
})(Routing || (Routing = {}));
//# sourceMappingURL=app.js.map