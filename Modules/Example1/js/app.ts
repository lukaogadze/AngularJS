module Modules.Example1 {
    const app: angular.IModule = angular.module("myApp", []);
    app.controller("myCtrl", function($scope: Intro.Example6.IMyCtrl) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
    });
}