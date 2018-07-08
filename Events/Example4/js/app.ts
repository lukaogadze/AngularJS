namespace Events.Example4 {
    interface IMyCtrl {
        showMe: boolean;
        myFunc: () => void;
    }
    const app = angular.module("myApp", []);
    app.controller("myCtrl", function ($scope: IMyCtrl) {
        $scope.showMe = false;
        $scope.myFunc = function () {
            $scope.showMe = !$scope.showMe;
        }
    });
}