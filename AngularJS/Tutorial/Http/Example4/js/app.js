"use strict";
var Http;
(function (Http) {
    var Example4;
    (function (Example4) {
        // rip
        // Cross-Origin Request Blocked..... fk
        const app = angular.module('myApp', []);
        app.controller('myCtrl', function ($scope, $http) {
            $http.get("wrongfilename.htm")
                .then(function (response) {
                $scope.content = response.data.toString();
            }, function () {
                $scope.content = "Something went wrong";
            });
        });
    })(Example4 = Http.Example4 || (Http.Example4 = {}));
})(Http || (Http = {}));
//# sourceMappingURL=app.js.map