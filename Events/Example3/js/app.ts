namespace Events.Example3 {
    interface IMyCtrl {
        count: number;
        myFunction: () => void;
    }
    const app = angular.module("myApp", []);
    app.controller("myCtrl", function ($scope: IMyCtrl) {
        $scope.count = 0;
        $scope.myFunction = function () {
            $scope.count++;
        }
    });
}