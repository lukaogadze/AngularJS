namespace Filters.Example3 {
    interface INamesCtrl {
        names: { name: string, country: string }[];
    }
    angular.module("myApp", []).controller("namesCtrl", function ($scope: INamesCtrl) {
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
};