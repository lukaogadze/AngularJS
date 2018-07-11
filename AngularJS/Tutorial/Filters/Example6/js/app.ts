namespace Filters.Example6 {
    interface INamesCtrl {
        names: string[];
    }

    angular.module("myApp", []).controller("namesCtrl", function ($scope: INamesCtrl) {
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
};