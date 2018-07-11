namespace API.Example2 {
    interface IMyCtrl {
        x1: string;
        x2: string;
    }
    const app = angular.module("myApp",[]);
    app.controller("myCtrl", function name($scope: IMyCtrl) {
        $scope.x1 = "john";
        $scope.x2 = angular.uppercase($scope.x1);
    });
}