"use strict";
var Application;
(function (Application) {
    var Example1;
    (function (Example1) {
        const app = angular.module("myShoppingList", []);
        app.controller("myCtrl", function ($scope) {
            $scope.products = ["Milk", "Bread", "Cheese"];
        });
    })(Example1 = Application.Example1 || (Application.Example1 = {}));
})(Application || (Application = {}));
//# sourceMappingURL=app.js.map