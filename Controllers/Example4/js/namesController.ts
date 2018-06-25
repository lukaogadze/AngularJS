module Controllers.Example4 {
    interface INamesCtrl{
        names: Array<{name: string, country: string}>
    }
    angular.module("myApp",[]).controller("namesCtrl", function ($scope: INamesCtrl): void {
        $scope.names = [
            {name:"Jani", country:"Norway"},
            {name:"Hege", country:"Sweden"},
            {name:"Kai", country:"Denemark"}
        ];
    })
}