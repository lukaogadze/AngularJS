module Controllers.Example1 {
    const app = angular.module("myApp",[]);
    app.controller("myCtrl", function ($scope: Intro.Example6.IMyCtrl): void {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
    });
}