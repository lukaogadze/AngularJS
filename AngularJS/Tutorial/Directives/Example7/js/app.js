"use strict";
var Directives;
(function (Directives) {
    var Example7;
    (function (Example7) {
        const app = angular.module("myApp", []);
        app.directive("w3TestDirective", function () {
            return {
                template: "<h1>Made by a directive!</h1>"
            };
        });
    })(Example7 = Directives.Example7 || (Directives.Example7 = {}));
})(Directives || (Directives = {}));
//# sourceMappingURL=app.js.map