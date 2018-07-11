namespace Select.Example5 {
    interface IMyCtrl {
        cars: {
            car01: string;
            car02: string;
            car03: string;
        };
    }
    const app = angular.module("myApp", []);
    app.controller("myCtrl", function ($scope: IMyCtrl) {
        $scope.cars = {
            car01: "Ford",
            car02: "Fiat",
            car03: "Volvo"
        };
    });
}