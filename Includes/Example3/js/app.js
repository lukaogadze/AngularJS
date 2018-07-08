"use strict";
var Includes;
(function (Includes) {
    var Example3;
    (function (Example3) {
        const app = angular.module('myApp', []);
        app.config(function ($sceDelegateProvider) {
            $sceDelegateProvider.resourceUrlWhitelist([
                'https://tryit.w3schools.com/**'
            ]);
        });
    })(Example3 = Includes.Example3 || (Includes.Example3 = {}));
})(Includes || (Includes = {}));
//# sourceMappingURL=app.js.map