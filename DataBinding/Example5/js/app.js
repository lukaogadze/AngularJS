"use strict";
var DataBinding;
(function (DataBinding) {
    var Example5;
    (function (Example5) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function ($scope) {
            $scope.firstName = "John";
            $scope.changeName = function () {
                $scope.firstName = "Nelly";
            };
        });
    })(Example5 = DataBinding.Example5 || (DataBinding.Example5 = {}));
})(DataBinding || (DataBinding = {}));
//# sourceMappingURL=app.js.map