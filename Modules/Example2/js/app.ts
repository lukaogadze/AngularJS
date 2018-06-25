module Modules.Example2 {
    interface IW3TestTemplate {
        template: string;
    }

    const app: angular.IModule = angular.module("myApp",[]);
    app.directive("w3TestDirective", function (): IW3TestTemplate {
        return {
            template: "I was made in a directive constructor!"
        };
    });
}