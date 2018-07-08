"use strict";
var Includes;
(function (Includes) {
    var Example2;
    (function (Example2) {
        const app = angular.module("myApp", []);
        app.controller("customersCtrl", function ($scope, $http) {
            $http.get("https://www.w3schools.com/angular/customers.php")
                .then(function (response) {
                $scope.names = response.data.records;
            });
        });
    })(Example2 = Includes.Example2 || (Includes.Example2 = {}));
})(Includes || (Includes = {}));
//# sourceMappingURL=app.js.map