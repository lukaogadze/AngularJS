"use strict";
var Select;
(function (Select) {
    var Example3;
    (function (Example3) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function ($scope) {
            $scope.cars = [
                { model: "Ford Mustang", color: "red" },
                { model: "Fiat 500", color: "white" },
                { model: "Volvo XC90", color: "black" }
            ];
        });
    })(Example3 = Select.Example3 || (Select.Example3 = {}));
})(Select || (Select = {}));
//# sourceMappingURL=app.js.map