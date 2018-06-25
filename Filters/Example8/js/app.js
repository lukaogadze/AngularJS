"use strict";
var Filters;
(function (Filters) {
    var Example8;
    (function (Example8) {
        const app = angular.module("myApp", []);
        app.filter("myFormat", function () {
            return function (x) {
                let txt = "";
                let c = "";
                for (let i = 0; i < x.length; i++) {
                    c = x[i];
                    if (i % 2 == 0) {
                        c = c.toUpperCase();
                    }
                    txt += c;
                }
                return txt;
            };
        });
        app.controller("namesCtrl", function ($scope) {
            $scope.names = [
                'Jani',
                'Carl',
                'Margareth',
                'Hege',
                'Joe',
                'Gustav',
                'Birgit',
                'Mary',
                'Kai'
            ];
        });
    })(Example8 = Filters.Example8 || (Filters.Example8 = {}));
})(Filters || (Filters = {}));
;
//# sourceMappingURL=app.js.map