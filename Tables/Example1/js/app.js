"use strict";
var Tables;
(function (Tables) {
    var Example1;
    (function (Example1) {
        const app = angular.module("myApp", []);
        app.controller("customersCtrl", function ($scope, $http) {
            $http.get("https://www.w3schools.com/angular/customers.php")
                .then(function (response) {
                $scope.names = response.data.records;
            });
        });
    })(Example1 = Tables.Example1 || (Tables.Example1 = {}));
})(Tables || (Tables = {}));
//# sourceMappingURL=app.js.map