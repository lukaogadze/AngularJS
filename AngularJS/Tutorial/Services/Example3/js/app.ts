namespace Services.Example3 {
    interface IMyCtrl {
        myHeader: string;
    }
    // Cross-Origin Request Blocked..... fk
    const app = angular.module("myApp", []);
    app.controller("myCtrl", ($scope: IMyCtrl, $timeout: angular.ITimeoutService) => {
        $scope.myHeader = "Hello World!";
        $timeout(() => {
            $scope.myHeader = "How are you today?";
        }, 2000);
    });
    
}