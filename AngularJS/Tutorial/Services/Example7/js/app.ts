namespace Services.Example7 {
    interface IHexafy {
        myFunc: (x: number) => string;
    }

    interface IMyCtrl {
        counts: number[];
    }

    const app = angular.module('myApp', []);
    app.service('hexafy', function (this: IHexafy) {
        this.myFunc = function (x: number): string {
            return x.toString(16);
        }
    });
    app.filter('myFormat', ['hexafy', function (hexafy: IHexafy) {
        return function (x: number) {
            return hexafy.myFunc(x);
        };
    }]);

    app.controller("myCtrl", function ($scope: IMyCtrl) {
        $scope.counts = [255, 251, 200];
    });
    
}