"use strict";
var Tables;
(function (Tables) {
    var Example2;
    (function (Example2) {
        const app = angular.module("myApp", []);
        app.controller("customersCtrl", function ($scope, $http) {
            $http.get("https://www.w3schools.com/angular/customers.php")
                .then(function (response) {
                $scope.names = response.data.records;
            });
        });
    })(Example2 = Tables.Example2 || (Tables.Example2 = {}));
})(Tables || (Tables = {}));
//# sourceMappingURL=app.js.map