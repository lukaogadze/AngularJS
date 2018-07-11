namespace Routing.Example1 {
    const app = angular.module("myApp", ["ngRoute"]);
    app.config(function ($routeProvider: angular.route.IRouteProvider) {
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
}