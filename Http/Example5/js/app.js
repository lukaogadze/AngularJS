"use strict";
var Http;
(function (Http) {
    var Example5;
    (function (Example5) {
        const app = angular.module('myApp', []);
        app.controller('customersCtrl', function ($scope, $http) {
            // https://www.w3schools.com/angular/customers.php
            // http://customersdata.getsandbox.com/customers
            $http.get("https://www.w3schools.com/angular/customers.php").then(function (response) {
                $scope.myData = response.data.records;
            });
        });
    })(Example5 = Http.Example5 || (Http.Example5 = {}));
})(Http || (Http = {}));
//# sourceMappingURL=app.js.map