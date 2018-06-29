namespace Http.Example2 {
    interface IMyCtrl {
        myWelcome: string;
    }
    // rip
    // Cross-Origin Request Blocked..... fk
    const app = angular.module("myApp", []);
    app.controller("myCtrl", ($scope: IMyCtrl, $http: angular.IHttpService) => {
        $http({
            method: "GET",
            url: "https://www.w3schools.com/angular/welcome.htm"
        }).then(function mySuccess(response: angular.IHttpPromiseCallbackArg<{}>) {
            $scope.myWelcome = response.data!.toString();
        }, function myError(response: angular.IHttpPromiseCallbackArg<{}>) {
            $scope.myWelcome = response.statusText!;
        });
    });    
}