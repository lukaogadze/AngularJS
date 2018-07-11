"use strict";
var Model;
(function (Model) {
    var Example2;
    (function (Example2) {
        const app = angular.module("myApp", []);
        app.controller("myCtrl", function ($scope) {
            $scope.name = "John Doe";
        });
    })(Example2 = Model.Example2 || (Model.Example2 = {}));
})(Model || (Model = {}));
//# sourceMappingURL=app.js.map