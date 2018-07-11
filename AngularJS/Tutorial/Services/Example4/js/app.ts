namespace Services.Example4 {
    interface IMyCtrl {
        theTime: string;
    }
    
    const app = angular.module("myApp", []);
    app.controller("myCtrl", ($scope: IMyCtrl, $interval: angular.IIntervalService) => {
        $scope.theTime = new Date().toLocaleTimeString();
        $interval(() => {
            $scope.theTime = new Date().toLocaleTimeString();
        }, 1000);
    });
    
}