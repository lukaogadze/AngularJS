"use strict";
var Application;
(function (Application) {
    var Example3;
    (function (Example3) {
        const app = angular.module("myShoppingList", []);
        app.controller("myCtrl", function ($scope) {
            $scope.products = ["Milk", "Bread", "Cheese"];
            $scope.addItem = function () {
                if ($scope.addMe.trim() !== "") {
                    $scope.products.push($scope.addMe);
                }
            };
            $scope.removeItem = function (index) {
                $scope.products.splice(index, 1);
            };
        });
    })(Example3 = Application.Example3 || (Application.Example3 = {}));
})(Application || (Application = {}));
//# sourceMappingURL=app.js.map