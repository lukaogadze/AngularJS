namespace SQL.Example2 {
    interface ICustomer {
        Name: string;
        Country: string;
    }

    interface ICustomersCtrl {
        names: ICustomer[];
    }

    interface IRemoteCustomers {
        records: ICustomer[];
    }


    const app = angular.module("myApp", []);
    app.controller("customersCtrl", function ($scope: ICustomersCtrl, $http: angular.IHttpService) {
        $http.get("https://www.w3schools.com/angular/customers_sql.aspx")
            .then(function (response: angular.IHttpPromiseCallbackArg<{}>) {
                $scope.names = (response.data as IRemoteCustomers).records;
            });
    });

}