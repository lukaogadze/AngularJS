"use strict";
var Tables;
(function (Tables) {
    var Example4;
    (function (Example4) {
        const app = angular.module("myApp", []);
        app.controller("customersCtrl", function ($scope, $http) {
            $http.get("https://www.w3schools.com/angular/customers.php")
                .then(function (response) {
                $scope.names = response.data.records;
            });
        });
    })(Example4 = Tables.Example4 || (Tables.Example4 = {}));
})(Tables || (Tables = {}));
//# sourceMappingURL=app.js.map