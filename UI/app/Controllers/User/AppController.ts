module UserTest.User.Controllers {
    export class AppController {
        static $inject = ["$scope", '$window'];
        constructor($scope: ng.IScope, public $window: ng.IWindowService) {            
            this.$window.localStorage.removeItem('UserTest.secret');
        }
    }

    angular.module("UserTest").controller("UserTest.User.Controllers.AppController", AppController);
}