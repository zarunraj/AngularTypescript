/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
module UserTest.User {
    export class Routes {
        static $inject = ["$routeProvider" ];
        static configureRoutes($routeProvider: ng.route.IRouteProvider ) {
            $routeProvider.caseInsensitiveMatch = true;
            $routeProvider.when("/login", { controller: "UserTest.User.Controllers.LoginController", templateUrl: UserTest.Constants.ApplicationPath + "app/views/user/login.html", controllerAs: "Login"});
            $routeProvider.when("/register", { controller: "UserTest.User.Controllers.RegisterController", templateUrl: UserTest.Constants.ApplicationPath + "app/views/user/register.html", controllerAs: "Register" });
            $routeProvider.otherwise({ redirectTo: "/login" });
        }
    }
}