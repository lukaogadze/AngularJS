module Model.Example2 {
    const app = angular.module("myApp",[]);
    app.controller("myCtrl", function ($scope: {name: string}) {
        $scope.name = "John Doe";
    });

}