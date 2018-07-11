"use strict";
var Routing;
(function (Routing) {
    var Example5;
    (function (Example5) {
        const app = angular.module("myApp", ["ngRoute"]);
        app.config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                templateUrl: "main.htm"
            })
                .when("/london", {
                templateUrl: "london.htm"
            })
                .when("/paris", {
                templateUrl: "paris.htm"
            });
        });
    })(Example5 = Routing.Example5 || (Routing.Example5 = {}));
})(Routing || (Routing = {}));
//# sourceMappingURL=app.js.map