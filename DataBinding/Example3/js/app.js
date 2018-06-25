"use strict";
var DataBinding;
(function (DataBinding) {
    var Example3;
    (function (Example3) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function ($scope) {
            $scope.firstName = "John";
            $scope.lastName = "Doe";
        });
    })(Example3 = DataBinding.Example3 || (DataBinding.Example3 = {}));
})(DataBinding || (DataBinding = {}));
//# sourceMappingURL=app.js.map