namespace Includes.Example2 {
    interface ICustomer {
        Name: string;
        Country: string;
    }

    interface ICustomerCtrl {
        names: ICustomer[];
    }

    interface IRemoteCustomers {
        records: ICustomer[];
    }

    const app = angular.module("myApp", []);
    app.controller("customersCtrl", function ($scope: ICustomerCtrl, $http: angular.IHttpService) {
        $http.get("https://www.w3schools.com/angular/customers.php")
            .then(function (response: angular.IHttpPromiseCallbackArg<{}>) {
                $scope.names = (response.data as IRemoteCustomers).records;
            });
    });
}