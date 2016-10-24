module UserTest.Controllers {
    export interface ISideMenuStyle {
        height: string;
    }
    export interface IAppControllerScope extends ng.IScope
    {
        sideMenuStyle: ISideMenuStyle;
    }
    export class AppController {
        static $inject = ['$scope', '$window'];
        constructor(public $scope: IAppControllerScope, public $window: ng.IWindowService) {
            let clientId: string = this.$window.localStorage.getItem('UserTest.secret');
            if (clientId) {
                UserTest.Constants.ApiToken = clientId;
            } else {
                this.$window.location.href = UserTest.Constants.ApplicationPath + 'index.html';
            }
            let topbarHeight: number = 5;
            this.$scope.sideMenuStyle = {
                height: (window.innerHeight - topbarHeight) + 'px'
            };
        }
    }

    angular.module("UserTest").controller("UserTest.Controllers.AppController", AppController);
}