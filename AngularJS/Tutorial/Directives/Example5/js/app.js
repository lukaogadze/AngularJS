"use strict";
var Directives;
(function (Directives) {
    var Example5;
    (function (Example5) {
        const app = angular.module("myApp", []);
        app.directive("w3TestDirective", function () {
            return {
                template: "<h1>Made by a directive!</h1>"
            };
        });
    })(Example5 = Directives.Example5 || (Directives.Example5 = {}));
})(Directives || (Directives = {}));
//# sourceMappingURL=app.js.map