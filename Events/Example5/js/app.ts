namespace Events.Example5 {
    interface IMyCtrl {
        x: number;
        y: number;
        myFunc: (event: MouseEvent) => void;
    }
    const app = angular.module("myApp", []);
    app.controller("myCtrl", function ($scope: IMyCtrl) {
        $scope.myFunc = function (event: MouseEvent) {
            $scope.x = event.clientX;
            $scope.y = event.clientY;
        };
    });
}