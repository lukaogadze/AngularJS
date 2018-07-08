"use strict";
var SQL;
(function (SQL) {
    var Example1;
    (function (Example1) {
        const app = angular.module("myApp", []);
        app.controller("customersCtrl", function ($scope, $http) {
            $http.get("https://www.w3schools.com/angular/customers_mysql.php")
                .then(function (response) {
                $scope.names = response.data.records;
            });
        });
    })(Example1 = SQL.Example1 || (SQL.Example1 = {}));
})(SQL || (SQL = {}));
//# sourceMappingURL=app.js.map