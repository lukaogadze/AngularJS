module Scope.Example1 {
    const app = angular.module("myApp", []);
    app.controller("myCtrl", function ($scope: {carname: string}): void {
        $scope.carname = "Volvo";
    });
}