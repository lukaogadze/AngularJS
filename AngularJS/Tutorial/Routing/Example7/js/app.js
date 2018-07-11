"use strict";
var Routing;
(function (Routing) {
    var Example7;
    (function (Example7) {
        const app = angular.module("myApp", ["ngRoute"]);
        app.config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                template: "<h1>Main</h1><p>Click on the links to change this content</p>"
            })
                .when("/banana", {
                template: "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
            })
                .when("/tomato", {
                template: "<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>"
            });
        });
    })(Example7 = Routing.Example7 || (Routing.Example7 = {}));
})(Routing || (Routing = {}));
//# sourceMappingURL=app.js.map