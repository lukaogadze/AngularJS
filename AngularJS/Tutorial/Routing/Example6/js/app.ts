namespace Routing.Example6 {
    interface IMessageController {
        msg: string;
    }

    const app = angular.module("myApp", ["ngRoute"]);
    app.config(function ($routeProvider: angular.route.IRouteProvider) {
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

    app.controller("londonCtrl", function ($scope: IMessageController) {
        $scope.msg = "I love London";
    });

    app.controller("parisCtrl", function ($scope: IMessageController) {
        $scope.msg = "I love Paris";
    });
}