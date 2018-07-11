module Directives.Example10 {
    interface IW3TestDirective {
        restrict: string;
        template: string;
    }
    const app: angular.IModule = angular.module("myApp",[]);
    app.directive("w3TestDirective", function (): IW3TestDirective {
        return {
            restrict: "A",
            template: "<h1>Made by a directive!</h1>"
        };
    });
}