namespace Validation.Example7 {
    interface IValidateCtrl {
        user: string;
        email: string;
    }

    const app = angular.module('myApp', []);
    app.controller('validateCtrl', function ($scope: IValidateCtrl) {
        $scope.user = 'John Doe';
        $scope.email = 'john.doe@gmail.com';
    });
}