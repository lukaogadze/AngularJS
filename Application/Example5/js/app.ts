namespace Application.Example4 {
    interface IMyCtrl {
        products: string[];
        addItem: () => void;
        removeItem: (index: number) => void;
        addMe: string;
        errortext: string;
    }
    const app = angular.module("myShoppingList", []);
    app.controller("myCtrl", function ($scope: IMyCtrl) {
        $scope.products = ["Milk", "Bread", "Cheese"];
        $scope.addItem = function () {
            $scope.errortext = "";
            if (!$scope.addMe) { return; }
            if ($scope.products.indexOf($scope.addMe) == -1) {
                $scope.products.push($scope.addMe);
                $scope.addMe = "";
            } else {
                $scope.errortext = "The item is already in your shopping list.";
            }
        }
        $scope.removeItem = function (x) {
            $scope.errortext = "";
            $scope.products.splice(x, 1);
        }
    });

}