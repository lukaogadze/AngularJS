namespace Filters.Example8 {
    interface INamesCtrl {
        names: string[];
    }
    const app: angular.IModule = angular.module("myApp", []);
    app.filter("myFormat", function () {
        return function (x: string) {
            let txt: string = "";
            let c: string = "";
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

    app.controller("namesCtrl", function ($scope: INamesCtrl) {
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
    })
};