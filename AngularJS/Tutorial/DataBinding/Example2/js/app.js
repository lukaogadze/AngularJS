"use strict";
var DataBinding;
(function (DataBinding) {
    var Example2;
    (function (Example2) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function ($scope) {
            $scope.firstName = "John";
            $scope.lastName = "Doe";
        });
    })(Example2 = DataBinding.Example2 || (DataBinding.Example2 = {}));
})(DataBinding || (DataBinding = {}));
//# sourceMappingURL=app.js.map