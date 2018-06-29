namespace Services.Example1 {
    interface IMyCtrl {
        myUrl: string;
    }
    const app: angular.IModule = angular.module("myApp", []);
    app.controller("myCtrl", ($scope: IMyCtrl, $location: angular.ILocationService) => {
        $scope.myUrl = $location.absUrl();
    });
}