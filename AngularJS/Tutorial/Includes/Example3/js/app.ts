namespace Includes.Example3 {
    interface ISecDelegateProvider {
        resourceUrlWhitelist: (arr: string[]) => void;
    }

    const app = angular.module('myApp', [])

    app.config(function ($sceDelegateProvider: ISecDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'https://tryit.w3schools.com/**'
        ]);
    });
}