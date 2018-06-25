module Modules.Example5 {
    const app: angular.IModule = angular.module("myApp",[]);
    app.controller("myCtrl", function ($scope: Intro.Example6.IMyCtrl) {
        $scope.firstName = "ლუკა";
        $scope.lastName = "ოღაძე";
    });
}