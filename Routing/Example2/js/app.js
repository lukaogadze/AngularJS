"use strict";
var Routing;
(function (Routing) {
    var Example2;
    (function (Example2) {
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
    })(Example2 = Routing.Example2 || (Routing.Example2 = {}));
})(Routing || (Routing = {}));
//# sourceMappingURL=app.js.map