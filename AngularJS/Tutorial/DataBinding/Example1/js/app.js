"use strict";
var DataBinding;
(function (DataBinding) {
    var Example1;
    (function (Example1) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function ($scope) {
            $scope.firstName = "John";
            $scope.lastName = "Doe";
        });
    })(Example1 = DataBinding.Example1 || (DataBinding.Example1 = {}));
})(DataBinding || (DataBinding = {}));
//# sourceMappingURL=app.js.map