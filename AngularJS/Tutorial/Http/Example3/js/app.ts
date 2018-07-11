namespace Http.Example3 {
    interface IMyCtrl {
        content: string;
        statuscode: number;
        statusText: string;
    }
    // rip
    // Cross-Origin Request Blocked..... fk
    const app = angular.module("myApp", []);
    app.controller("myCtrl", ($scope: IMyCtrl, $http: angular.IHttpService) => {
        $http.get("https://www.w3schools.com/angular/welcome.htm")
            .then((response: angular.IHttpPromiseCallbackArg<{}>) => {
                $scope.content = response.data!.toString();
                $scope.statuscode = response.status!;
                $scope.statusText = response.statusText!;
            });
    });    
}