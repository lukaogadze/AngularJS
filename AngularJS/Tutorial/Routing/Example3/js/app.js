"use strict";
var Routing;
(function (Routing) {
    var Example3;
    (function (Example3) {
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
    })(Example3 = Routing.Example3 || (Routing.Example3 = {}));
})(Routing || (Routing = {}));
//# sourceMappingURL=app.js.map