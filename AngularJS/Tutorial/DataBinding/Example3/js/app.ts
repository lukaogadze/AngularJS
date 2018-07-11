module DataBinding.Example3 {
    const app: angular.IModule = angular.module("myApp",[]);
    app.controller("myCtrl", function ($scope: Intro.Example6.IMyCtrl): void {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
    });
}