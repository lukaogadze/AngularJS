namespace Filters.Example1 {
    angular.module("myApp", []).controller("personCtrl", function ($scope: Intro.Example6.IMyCtrl) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
    });
};