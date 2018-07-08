namespace Select.Example2 {
    interface IMyCtrl {
        names: string[];
    }
    const app = angular.module("myApp", []);
    app.controller("myCtrl", function ($scope: IMyCtrl) {
        $scope.names = ["Emil", "Tobias", "Linus"];
    });
}