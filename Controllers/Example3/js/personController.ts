module Controllers.Example3 {
    interface IPersonCtrl extends Intro.Example6.IMyCtrl{
        fullName: () => string;
    }
    const app = angular.module("myApp",[]);
    app.controller("personCtrl", function ($scope: IPersonCtrl): void {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
        $scope.fullName = function (): string {
            return $scope.firstName + " " + $scope.lastName;
        };
    });
}