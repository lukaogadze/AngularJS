"use strict";
var Routing;
(function (Routing) {
    var Example1;
    (function (Example1) {
        const app = angular.module("myApp", ["ngRoute"]);
        app.config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                templateUrl: "main.htm"
            })
                .when("/red", {
                templateUrl: "red.htm"
            })
                .when("/green", {
                templateUrl: "green.htm"
            })
                .when("/blue", {
                templateUrl: "blue.htm"
            });
        });
    })(Example1 = Routing.Example1 || (Routing.Example1 = {}));
})(Routing || (Routing = {}));
//# sourceMappingURL=app.js.map