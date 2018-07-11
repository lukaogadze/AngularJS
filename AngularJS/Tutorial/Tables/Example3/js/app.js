"use strict";
var Tables;
(function (Tables) {
    var Example3;
    (function (Example3) {
        const app = angular.module("myApp", []);
        app.controller("customersCtrl", function ($scope, $http) {
            $http.get("https://www.w3schools.com/angular/customers.php")
                .then(function (response) {
                $scope.names = response.data.records;
            });
        });
    })(Example3 = Tables.Example3 || (Tables.Example3 = {}));
})(Tables || (Tables = {}));
//# sourceMappingURL=app.js.map