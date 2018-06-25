module Scope.Example4 {
    interface IColor{
        color: string;
    }
    const app = angular.module("myApp", []);
    app.run(function ($rootScope: IColor): void {
        $rootScope.color = "blue";
    });
    
    app.controller("myCtrl", function($scope: IColor){
        $scope.color = "Red";
    });
}