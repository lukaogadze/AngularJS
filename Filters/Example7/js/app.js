"use strict";
var Filters;
(function (Filters) {
    var Example7;
    (function (Example7) {
        angular.module("myApp", []).controller("namesCtrl", function ($scope) {
            $scope.names = [
                { name: 'Jani', country: 'Norway' },
                { name: 'Carl', country: 'Sweden' },
                { name: 'Margareth', country: 'England' },
                { name: 'Hege', country: 'Norway' },
                { name: 'Joe', country: 'Denmark' },
                { name: 'Gustav', country: 'Sweden' },
                { name: 'Birgit', country: 'Denmark' },
                { name: 'Mary', country: 'England' },
                { name: 'Kai', country: 'Norway' }
            ];
            $scope.orderByMe = function (x) {
                $scope.myOrderBy = x;
            };
        });
    })(Example7 = Filters.Example7 || (Filters.Example7 = {}));
})(Filters || (Filters = {}));
;
//# sourceMappingURL=app.js.map