"use strict";
var Services;
(function (Services) {
    var Example2;
    (function (Example2) {
        // Cross-Origin Request Blocked..... fk
        const app = angular.module("myApp", []);
        app.controller("myCtrl", ($scope, $http) => {
            $http.get("https://www.w3schools.com/angular/welcome.htm").then((response) => {
                $scope.myWelcome = response.data;
            });
        });
    })(Example2 = Services.Example2 || (Services.Example2 = {}));
})(Services || (Services = {}));
//# sourceMappingURL=app.js.map