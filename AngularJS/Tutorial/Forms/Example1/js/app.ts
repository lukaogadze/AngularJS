namespace Forms.Example1 {
    interface IFormCtrl {
        firstName: string;
    }
    const app = angular.module("myApp", []);
    app.controller("formCtrl", function ($scope: IFormCtrl) {
        $scope.firstName = "John";
    });
}