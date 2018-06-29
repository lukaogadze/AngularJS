"use strict";
var Services;
(function (Services) {
    var Example6;
    (function (Example6) {
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
    })(Example6 = Services.Example6 || (Services.Example6 = {}));
})(Services || (Services = {}));
//# sourceMappingURL=app.js.map