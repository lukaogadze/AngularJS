"use strict";
var Filters;
(function (Filters) {
    var Example3;
    (function (Example3) {
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
        });
    })(Example3 = Filters.Example3 || (Filters.Example3 = {}));
})(Filters || (Filters = {}));
;
//# sourceMappingURL=app.js.map