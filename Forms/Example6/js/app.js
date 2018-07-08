"use strict";
var Forms;
(function (Forms) {
    var Example6;
    (function (Example6) {
        const app = angular.module("myApp", []);
        app.controller('formCtrl', function ($scope) {
            $scope.master = { firstName: "John", lastName: "Doe" };
            $scope.reset = function () {
                $scope.user = angular.copy($scope.master);
            };
            $scope.reset();
        });
    })(Example6 = Forms.Example6 || (Forms.Example6 = {}));
})(Forms || (Forms = {}));
//# sourceMappingURL=app.js.map