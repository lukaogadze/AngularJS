namespace Events.Example2 {
    interface IMyCtrl {
        count: number;
    }
    const app = angular.module("myApp", []);
    app.controller("myCtrl", function ($scope: IMyCtrl) {
        $scope.count = 0;
    });
}