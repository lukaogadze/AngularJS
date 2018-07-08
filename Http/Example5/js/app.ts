namespace Http.Example5 {
    interface ICustomer {
        Name: string;
        City: string;
        Country: string;
    }

    interface ICustomersCtrl {
        myData: ICustomer[];
    }

    interface IRemoteCustomers {
        records: ICustomer[];
    }

    const app = angular.module('myApp', []);
    app.controller('customersCtrl', function ($scope: ICustomersCtrl, $http: angular.IHttpService) {
        // https://www.w3schools.com/angular/customers.php
        // http://customersdata.getsandbox.com/customers
        $http.get("https://www.w3schools.com/angular/customers.php").then(function (response: angular.IHttpPromiseCallbackArg<{}>) {
            $scope.myData = (response.data as IRemoteCustomers).records;
        });
    });
}