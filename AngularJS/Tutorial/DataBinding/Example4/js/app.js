"use strict";
var DataBinding;
(function (DataBinding) {
    var Example4;
    (function (Example4) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function ($scope) {
            $scope.firstName = "John";
            $scope.lastName = "Doe";
        });
    })(Example4 = DataBinding.Example4 || (DataBinding.Example4 = {}));
})(DataBinding || (DataBinding = {}));
//# sourceMappingURL=app.js.map