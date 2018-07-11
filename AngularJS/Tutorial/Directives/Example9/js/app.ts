module Directives.Example9 {
    interface IW3TestDirective {
        restrict: string;
        replace: boolean;
        template: string;
    }
    const app: angular.IModule = angular.module("myApp",[]);
    app.directive("w3TestDirective", function (): IW3TestDirective {
        return {
            restrict: "M",
            replace: true,
            template: "<h1>Made by a directive!</h1>"
        };
    });
}