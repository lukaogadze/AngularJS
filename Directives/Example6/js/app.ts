module Directives.Example6 {
    interface IW3TestDirective {
        template: string;
    }
    const app: angular.IModule = angular.module("myApp",[]);
    app.directive("w3TestDirective", function (): IW3TestDirective {
        return {
            template: "<h1>Made by a directive!</h1>"
        };
    });
}