module UserTest.User.Controllers {
    export interface ILoginScope extends ng.IScope {
        userName: string;
        password: string;

        loginError: string;
    }
    export class LoginController {
        static $inject = ["UserTest.Services.UserService", "$scope", '$window'];
        constructor(public UserService: UserTest.Services.UserService, public $scope: ILoginScope, public $window: ng.IWindowService) {
            this.$scope.loginError = undefined;
        }
        ValidateLogin = () => {
            var userModel: Interfaces.Models.User.ILogin = {
                grant_type: 'password',
                password: this.$scope.password,
                userName: this.$scope.userName
            };
            this.UserService.login(userModel).then((result: Interfaces.Models.User.ILoginSuccessResult) => {
                this.$window.localStorage.setItem('UserTest.secret', result.access_token);
                this.$window.location.href = UserTest.Constants.ApplicationPath + 'app.html';
            }).catch((reason: Interfaces.Models.User.ILoginFailedResult) => {
                this.$scope.loginError = reason.error_description;
            });

        }
    }

    angular.module("UserTest").controller("UserTest.User.Controllers.LoginController", LoginController);
}