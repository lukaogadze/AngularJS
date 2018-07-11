namespace Http.Example1 {
    interface IMyCtrl {
        myWelcome: string;
    }
    // rip 
    // Cross-Origin Request Blocked..... fk
    const app = angular.module("myApp", []);
    app.controller("myCtrl", ($scope: IMyCtrl, $http: angular.IHttpService) => {
        $http.get("https://www.w3schools.com/angular/welcome.htm").then((response: angular.IHttpPromiseCallbackArg<{}>) => {
            $scope.myWelcome = response.data!.toString();
        });
    });    
}