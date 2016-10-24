module UserTest.Interfaces.Services
{
    export interface IUserService {
        login: (model: UserTest.Interfaces.Models.User.ILogin) => ng.IPromise<UserTest.Interfaces.Models.User.ILoginSuccessResult>;
        resetPassword: (model: UserTest.Interfaces.Models.User.IResetPassword) => ng.IPromise<UserTest.Interfaces.Models.User.IResetPasswordResult>;
        addNewUser: (model: UserTest.Interfaces.Models.User.INewUser) => ng.IPromise<UserTest.Interfaces.Models.User.INewUserResult>;
    }
}