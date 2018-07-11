namespace Tables.Example2 {
    interface ICustomer {
        Name: string;
        Country: string;
    }

    interface IRemoteData {
        records: ICustomer[];
    }

    interface ICustomersCtrl {
        names: ICustomer[];
    }
    const app = angular.module("myApp", []);
    app.controller("customersCtrl", function ($scope: ICustomersCtrl, $http: angular.IHttpService) {
        $http.get("https://www.w3schools.com/angular/customers.php")
            .then(function (response: angular.IHttpPromiseCallbackArg<{}>) {
                $scope.names = (response.data as IRemoteData).records;
            });
    })
}