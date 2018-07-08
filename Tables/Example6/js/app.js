"use strict";
var Tables;
(function (Tables) {
    var Example6;
    (function (Example6) {
        const app = angular.module("myApp", []);
        app.controller("customersCtrl", function ($scope, $http) {
            $http.get("https://www.w3schools.com/angular/customers.php")
                .then(function (response) {
                $scope.names = response.data.records;
            });
        });
    })(Example6 = Tables.Example6 || (Tables.Example6 = {}));
})(Tables || (Tables = {}));
//# sourceMappingURL=app.js.map