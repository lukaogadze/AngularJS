"use strict";
var Directives;
(function (Directives) {
    var Example10;
    (function (Example10) {
        const app = angular.module("myApp", []);
        app.directive("w3TestDirective", function () {
            return {
                restrict: "A",
                template: "<h1>Made by a directive!</h1>"
            };
        });
    })(Example10 = Directives.Example10 || (Directives.Example10 = {}));
})(Directives || (Directives = {}));
//# sourceMappingURL=app.js.map