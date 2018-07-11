module Scope.Example2 {
    const app = angular.module("myApp", []);
    app.controller("myCtrl", function ($scope: {name: string}): void {
        $scope.name = "John Doe";
    });
}