"use strict";
var Directives;
(function (Directives) {
    var Example9;
    (function (Example9) {
        const app = angular.module("myApp", []);
        app.directive("w3TestDirective", function () {
            return {
                restrict: "M",
                replace: true,
                template: "<h1>Made by a directive!</h1>"
            };
        });
    })(Example9 = Directives.Example9 || (Directives.Example9 = {}));
})(Directives || (Directives = {}));
//# sourceMappingURL=app.js.map