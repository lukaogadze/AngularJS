module Scope.Example3 {
    const app = angular.module("myApp", []);
    app.controller("myCtrl", function ($scope: {names: string[]}): void {
        $scope.names = ["Emil","Tobias","Linus"];
    });
}