"use strict";
var Application;
(function (Application) {
    var Example2;
    (function (Example2) {
        const app = angular.module("myShoppingList", []);
        app.controller("myCtrl", function ($scope) {
            $scope.products = ["Milk", "Bread", "Cheese"];
            $scope.addItem = function () {
                if ($scope.addMe.trim() !== "") {
                    $scope.products.push($scope.addMe);
                }
            };
        });
    })(Example2 = Application.Example2 || (Application.Example2 = {}));
})(Application || (Application = {}));
//# sourceMappingURL=app.js.map