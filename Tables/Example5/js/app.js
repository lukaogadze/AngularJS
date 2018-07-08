"use strict";
var Tables;
(function (Tables) {
    var Example5;
    (function (Example5) {
        const app = angular.module("myApp", []);
        app.controller("customersCtrl", function ($scope, $http) {
            $http.get("https://www.w3schools.com/angular/customers.php")
                .then(function (response) {
                $scope.names = response.data.records;
            });
        });
    })(Example5 = Tables.Example5 || (Tables.Example5 = {}));
})(Tables || (Tables = {}));
//# sourceMappingURL=app.js.map