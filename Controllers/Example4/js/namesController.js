"use strict";
var Controllers;
(function (Controllers) {
    var Example4;
    (function (Example4) {
        angular.module("myApp", []).controller("namesCtrl", function ($scope) {
            $scope.names = [
                { name: "Jani", country: "Norway" },
                { name: "Hege", country: "Sweden" },
                { name: "Kai", country: "Denemark" }
            ];
        });
    })(Example4 = Controllers.Example4 || (Controllers.Example4 = {}));
})(Controllers || (Controllers = {}));
//# sourceMappingURL=namesController.js.map