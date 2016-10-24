module UserTest.Services {
    export class UserService

        implements Interfaces.Services.IUserService {
        static $inject = ["UserTest.Services.AppHttpService","$httpParamSerializerJQLike"];
        public AppHttpService: UserTest.Services.AppHttpService;
        private Api: string;
        constructor(AppHttpService: UserTest.Services.AppHttpService, public $httpParamSerializerJQLike: ng.IHttpParamSerializer) {
            this.AppHttpService = AppHttpService;
            this.Api = UserTest.Constants.ApiPath ;
        }
        login(model: Interfaces.Models.User.ILogin): ng.IPromise<Interfaces.Models.User.ILoginSuccessResult> {
            var promise: ng.IPromise<Interfaces.Models.User.ILoginSuccessResult>;
            promise = this.AppHttpService.PostFormUrlData("/token", this.$httpParamSerializerJQLike(model) );
            return promise;
        }

        resetPassword(model: Interfaces.Models.User.IResetPassword): ng.IPromise<Interfaces.Models.User.IResetPasswordResult> {
            var promise: ng.IPromise<Interfaces.Models.User.IResetPasswordResult>;
            promise = this.AppHttpService.Post(this.Api + "/Post/", model);
            return promise;
        }

        addNewUser(model: Interfaces.Models.User.INewUser): ng.IPromise<Interfaces.Models.User.INewUserResult> {
            var promise: ng.IPromise<Interfaces.Models.User.INewUserResult>;
            promise = this.AppHttpService.Post(this.Api + "/Post/", model);
            return promise;
        }
    }

    angular.module("UserTest").service("UserTest.Services.UserService", UserService);
}