"use strict";
var Http;
(function (Http) {
    var Example2;
    (function (Example2) {
        // rip
        // Cross-Origin Request Blocked..... fk
        const app = angular.module("myApp", []);
        app.controller("myCtrl", ($scope, $http) => {
            $http({
                method: "GET",
                url: "https://www.w3schools.com/angular/welcome.htm"
            }).then(function mySuccess(response) {
                $scope.myWelcome = response.data.toString();
            }, function myError(response) {
                $scope.myWelcome = response.statusText;
            });
        });
    })(Example2 = Http.Example2 || (Http.Example2 = {}));
})(Http || (Http = {}));
//# sourceMappingURL=app.js.map