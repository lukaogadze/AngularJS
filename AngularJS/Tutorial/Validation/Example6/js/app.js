"use strict";
var Validation;
(function (Validation) {
    var Example6;
    (function (Example6) {
        const app = angular.module('myApp', []);
        app.directive('myDirective', function () {
            return {
                require: 'ngModel',
                link: function (_1, _2, _3, mCtrl) {
                    function myValidation(value) {
                        if (value.indexOf("e") > -1) {
                            mCtrl.$setValidity('charE', true);
                        }
                        else {
                            mCtrl.$setValidity('charE', false);
                        }
                        return value;
                    }
                    mCtrl.$parsers.push(myValidation);
                }
            };
        });
    })(Example6 = Validation.Example6 || (Validation.Example6 = {}));
})(Validation || (Validation = {}));
//# sourceMappingURL=app.js.map