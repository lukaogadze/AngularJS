namespace Services.Example6 {
    interface IHexafy {
        myFunc: (x: number) => string;
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
    
}