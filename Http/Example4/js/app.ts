namespace Http.Example4 {
    interface IMyCtrl {
        content: string;
    }
    // rip
    // Cross-Origin Request Blocked..... fk
    const app = angular.module('myApp', []);
    app.controller('myCtrl', function ($scope: IMyCtrl, $http: angular.IHttpService) {
        $http.get("wrongfilename.htm")
            .then(function (response: angular.IHttpPromiseCallbackArg<{}>) {
                $scope.content = response.data!.toString();
            }, function () {
                $scope.content = "Something went wrong";
            });
    });
}