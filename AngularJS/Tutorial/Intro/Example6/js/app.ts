module Intro.Example6 {
    const app: angular.IModule = angular.module('myApp', []);

    export interface IMyCtrl{
        firstName: string;
        lastName: string;
    }

    app.controller('myCtrl', function($scope: IMyCtrl) {
        $scope.firstName= "John";
        $scope.lastName= "Doe";
    });
}
