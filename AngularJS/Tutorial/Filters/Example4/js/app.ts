namespace Filters.Example4 {
    interface ICostCtrl {
        price: number;
    }
    angular.module("myApp", []).controller("costCtrl", function ($scope: ICostCtrl) {
        $scope.price = 58;
    });
};