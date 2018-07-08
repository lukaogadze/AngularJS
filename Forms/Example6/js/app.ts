namespace Forms.Example6 {
    interface IFormsCtrl {
        master: { firstName: string, lastName: string },
        user: { firstName: string, lastName: string },
        reset: () => void;
    }

    const app = angular.module("myApp", []);
    app.controller('formCtrl', function ($scope: IFormsCtrl) {
        $scope.master = { firstName: "John", lastName: "Doe" };
        $scope.reset = function () {
            $scope.user = angular.copy($scope.master);
        };
        $scope.reset();
    });
}