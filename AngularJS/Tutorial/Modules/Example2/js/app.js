"use strict";
var Modules;
(function (Modules) {
    var Example2;
    (function (Example2) {
        const app = angular.module("myApp", []);
        app.directive("w3TestDirective", function () {
            return {
                template: "I was made in a directive constructor!"
            };
        });
    })(Example2 = Modules.Example2 || (Modules.Example2 = {}));
})(Modules || (Modules = {}));
//# sourceMappingURL=app.js.map