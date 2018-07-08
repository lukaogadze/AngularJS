"use strict";
var SQL;
(function (SQL) {
    var Example2;
    (function (Example2) {
        const app = angular.module("myApp", []);
        app.controller("customersCtrl", function ($scope, $http) {
            $http.get("https://www.w3schools.com/angular/customers_sql.aspx")
                .then(function (response) {
                $scope.names = response.data.records;
            });
        });
    })(Example2 = SQL.Example2 || (SQL.Example2 = {}));
})(SQL || (SQL = {}));
//# sourceMappingURL=app.js.map