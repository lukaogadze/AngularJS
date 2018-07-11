"use strict";
var Model;
(function (Model) {
    var Example1;
    (function (Example1) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function ($scope) {
            $scope.name = "John Doe";
        });
    })(Example1 = Model.Example1 || (Model.Example1 = {}));
})(Model || (Model = {}));
//# sourceMappingURL=app.js.map