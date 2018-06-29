"use strict";
var Http;
(function (Http) {
    var Example1;
    (function (Example1) {
        // rip 
        // Cross-Origin Request Blocked..... fk
        const app = angular.module("myApp", []);
        app.controller("myCtrl", ($scope, $http) => {
            $http.get("https://www.w3schools.com/angular/welcome.htm").then((response) => {
                $scope.myWelcome = response.data.toString();
            });
        });
    })(Example1 = Http.Example1 || (Http.Example1 = {}));
})(Http || (Http = {}));
//# sourceMappingURL=app.js.map