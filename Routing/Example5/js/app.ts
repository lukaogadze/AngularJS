namespace Routing.Example5 {
    const app = angular.module("myApp", ["ngRoute"]);
    app.config(function ($routeProvider: angular.route.IRouteProvider) {
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
}