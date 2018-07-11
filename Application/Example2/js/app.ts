namespace Application.Example2 {
    interface IMyCtrl {
        products: string[];
        addItem: () => void;
        addMe: string;
    }
    const app = angular.module("myShoppingList",[]);
    app.controller("myCtrl", function ($scope: IMyCtrl) {
        $scope.products = ["Milk","Bread","Cheese"];
        $scope.addItem = function (): void {
            if ($scope.addMe.trim() !== "") {
                $scope.products.push($scope.addMe);
            }
        };
    });

}