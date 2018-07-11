namespace Application.Example1 {
    interface IMyCtrl {
        products: string[];
    }
    const app = angular.module("myShoppingList",[]);
    app.controller("myCtrl", function ($scope: IMyCtrl) {
        $scope.products = ["Milk","Bread","Cheese"];
    });

}