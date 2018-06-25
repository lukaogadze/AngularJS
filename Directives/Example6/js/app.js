"use strict";
var Directives;
(function (Directives) {
    var Example6;
    (function (Example6) {
        const app = angular.module("myApp", []);
        app.directive("w3TestDirective", function () {
            return {
                template: "<h1>Made by a directive!</h1>"
            };
        });
    })(Example6 = Directives.Example6 || (Directives.Example6 = {}));
})(Directives || (Directives = {}));
//# sourceMappingURL=app.js.map