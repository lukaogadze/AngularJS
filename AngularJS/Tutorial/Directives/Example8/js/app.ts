module Directives.Example8 {
    interface IW3TestDirective {
        template: string;
        restrict: string;
    }
    const app: angular.IModule = angular.module("myApp",[]);
    app.directive("w3TestDirective", function (): IW3TestDirective {
        return {
            restrict: "C",
            template: "<h1>Made by a directive!</h1>"
        };
    });
}