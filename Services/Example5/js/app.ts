namespace Services.Example5 {
    interface IHexafy {
        myFunc: (x: number) => string;
    }

    interface IMyCtrl {
        hex: string;
    }

    const app = angular.module('myApp', []);

    app.service('hexafy', function (this: IHexafy) {
        this.myFunc = function (x: number) {
            return x.toString(16);
        }        
    });
    app.controller('myCtrl', function ($scope: IMyCtrl, hexafy: IHexafy) {
        $scope.hex = hexafy.myFunc(255);
    });
}