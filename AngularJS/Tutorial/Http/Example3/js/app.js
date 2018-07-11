"use strict";
var Http;
(function (Http) {
    var Example3;
    (function (Example3) {
        // rip
        // Cross-Origin Request Blocked..... fk
        const app = angular.module("myApp", []);
        app.controller("myCtrl", ($scope, $http) => {
            $http.get("https://www.w3schools.com/angular/welcome.htm")
                .then((response) => {
                $scope.content = response.data.toString();
                $scope.statuscode = response.status;
                $scope.statusText = response.statusText;
            });
        });
    })(Example3 = Http.Example3 || (Http.Example3 = {}));
})(Http || (Http = {}));
//# sourceMappingURL=app.js.map