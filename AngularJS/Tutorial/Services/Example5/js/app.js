"use strict";
var Services;
(function (Services) {
    var Example5;
    (function (Example5) {
        const app = angular.module('myApp', []);
        app.service('hexafy', function () {
            this.myFunc = function (x) {
                return x.toString(16);
            };
        });
        app.controller('myCtrl', function ($scope, hexafy) {
            $scope.hex = hexafy.myFunc(255);
        });
    })(Example5 = Services.Example5 || (Services.Example5 = {}));
})(Services || (Services = {}));
//# sourceMappingURL=app.js.map