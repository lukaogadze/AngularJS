"use strict";
var Directives;
(function (Directives) {
    var Example8;
    (function (Example8) {
        const app = angular.module("myApp", []);
        app.directive("w3TestDirective", function () {
            return {
                restrict: "C",
                template: "<h1>Made by a directive!</h1>"
            };
        });
    })(Example8 = Directives.Example8 || (Directives.Example8 = {}));
})(Directives || (Directives = {}));
//# sourceMappingURL=app.js.map