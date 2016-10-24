module UserTest.Controllers {
    export class DashboardController {
        static $inject = ['$scope' ];
        constructor(public $scope: ng.IScope ) {
            

        }
    }

    angular.module("UserTest").controller("UserTest.Controllers.DashboardController", DashboardController);
}