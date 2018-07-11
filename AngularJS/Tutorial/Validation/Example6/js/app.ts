namespace Validation.Example6 {
    const app = angular.module('myApp', []);
    app.directive('myDirective', function () {
        return {
            require: 'ngModel',
            link: function (_1, _2, _3, mCtrl: any) {
                function myValidation(value: any) {
                    if (value.indexOf("e") > -1) {
                        mCtrl.$setValidity('charE', true);
                    } else {
                        mCtrl.$setValidity('charE', false);
                    }
                    return value;
                }
                mCtrl.$parsers.push(myValidation);
            }
        };
    });
}