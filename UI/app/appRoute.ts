/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
module UserTest {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.caseInsensitiveMatch = true;
            $routeProvider.when("/dashboard", { controller: "UserTest.Controllers.DashboardController", templateUrl: UserTest.Constants.ApplicationPath + "app/views/dashboard/dashboard.html", controllerAs: "Dashboard" });            
            $routeProvider.otherwise({ redirectTo: "/dashboard" });
        }
    }
}