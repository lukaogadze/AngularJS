module DataBinding.Example5 {
    interface IMyCtrl {
        firstName: string;
        changeName: () => void;
    }
    const app: angular.IModule = angular.module("myApp", []);
    app.controller("myCtrl", function ($scope: IMyCtrl): void {
        $scope.firstName = "John";
        $scope.changeName = function (): void {
            $scope.firstName = "Nelly";
        };
    });
    
}