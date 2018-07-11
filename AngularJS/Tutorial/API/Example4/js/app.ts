namespace API.Example4 {
    interface IMyCtrl {
        x1: string;
        x2: string;
    }
    const app = angular.module("myApp",[]);
    app.controller("myCtrl", function name($scope: IMyCtrl) {
        $scope.x1 = "JOHN";
        $scope.x2 = angular.isNumber($scope.x1).toString();
    });
}