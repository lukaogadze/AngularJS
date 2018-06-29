"use strict";
var Services;
(function (Services) {
    var Example7;
    (function (Example7) {
        const app = angular.module('myApp', []);
        app.service('hexafy', function () {
            this.myFunc = function (x) {
                return x.toString(16);
            };
        });
        app.filter('myFormat', ['hexafy', function (hexafy) {
                return function (x) {
                    return hexafy.myFunc(x);
                };
            }]);
        app.controller("myCtrl", function ($scope) {
            $scope.counts = [255, 251, 200];
        });
    })(Example7 = Services.Example7 || (Services.Example7 = {}));
})(Services || (Services = {}));
//# sourceMappingURL=app.js.map