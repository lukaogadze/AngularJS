"use strict";
var Routing;
(function (Routing) {
    var Example4;
    (function (Example4) {
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
    })(Example4 = Routing.Example4 || (Routing.Example4 = {}));
})(Routing || (Routing = {}));
//# sourceMappingURL=app.js.map