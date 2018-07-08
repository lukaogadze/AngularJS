"use strict";
var Select;
(function (Select) {
    var Example4;
    (function (Example4) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function ($scope) {
            $scope.cars = [
                { model: "Ford Mustang", color: "red" },
                { model: "Fiat 500", color: "white" },
                { model: "Volvo XC90", color: "black" }
            ];
        });
    })(Example4 = Select.Example4 || (Select.Example4 = {}));
})(Select || (Select = {}));
//# sourceMappingURL=app.js.map