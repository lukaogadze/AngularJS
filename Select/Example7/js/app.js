"use strict";
var Select;
(function (Select) {
    var Example7;
    (function (Example7) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function ($scope) {
            $scope.cars = {
                car01: { brand: "Ford", model: "Mustang", color: "red" },
                car02: { brand: "Fiat", model: "500", color: "white" },
                car03: { brand: "Volvo", model: "XC90", color: "black" }
            };
        });
    })(Example7 = Select.Example7 || (Select.Example7 = {}));
})(Select || (Select = {}));
//# sourceMappingURL=app.js.map