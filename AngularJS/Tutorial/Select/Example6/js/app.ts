namespace Select.Example6 {
    interface IMyCtrl {
        cars: {
            car01: { brand: string, model: string, color: string },
            car02: { brand: string, model: string, color: string },
            car03: { brand: string, model: string, color: string }
        };
    }
    const app = angular.module("myApp", []);
    app.controller("myCtrl", function ($scope: IMyCtrl) {
        $scope.cars = {
            car01: { brand: "Ford", model: "Mustang", color: "red" },
            car02: { brand: "Fiat", model: "500", color: "white" },
            car03: { brand: "Volvo", model: "XC90", color: "black" }
        };
    });
}