namespace W3CSS.Example1 {

    interface IUser{
        id: number;
        fName: string;
        lName: string;
    }

    interface IUserCtrl {
        fName: string;
        lName: string;
        passw1: string;
        passw2: string;
        users: IUser[];
        hideform: boolean;
        edit: boolean;
        error: boolean;
        incomplete: boolean;
        editUser: (id: string) => void;
        $watch: (str: string, callback: () => void) => void;
        test: () => void;

    }

    angular.module('myApp', []).controller('userCtrl', function ($scope: IUserCtrl) {
        $scope.fName = '';
        $scope.lName = '';
        $scope.passw1 = '';
        $scope.passw2 = '';
        $scope.users = [
            { id: 1, fName: 'Hege', lName: "Pege" },
            { id: 2, fName: 'Kim', lName: "Pim" },
            { id: 3, fName: 'Sal', lName: "Smith" },
            { id: 4, fName: 'Jack', lName: "Jones" },
            { id: 5, fName: 'John', lName: "Doe" },
            { id: 6, fName: 'Peter', lName: "Pan" }
        ];
        $scope.hideform = true;
        $scope.edit = true;
        $scope.error = false;
        $scope.incomplete = false;
        $scope.editUser = function (id: number | string) {
            $scope.hideform = false;
            if (id == 'new') {
                $scope.edit = true;
                $scope.incomplete = true;
                $scope.fName = '';
                $scope.lName = '';
            } else {
                $scope.edit = false;
                $scope.fName = $scope.users[(id as number) - 1].fName;
                $scope.lName = $scope.users[(id as number) - 1].lName;
            }
        };
        $scope.$watch('passw1', function () { $scope.test(); });
        $scope.$watch('passw2', function () { $scope.test(); });
        $scope.$watch('fName', function () { $scope.test(); });
        $scope.$watch('lName', function () { $scope.test(); });
        $scope.test = function () {
            if ($scope.passw1 !== $scope.passw2) {
                $scope.error = true;
            } else {
                $scope.error = false;
            }
            $scope.incomplete = false;
            if ($scope.edit && (!$scope.fName.length ||
                !$scope.lName.length ||
                !$scope.passw1.length || !$scope.passw2.length)) {
                $scope.incomplete = true;
            }
        };
    })

}