module UserTest.Interfaces.Models.User {
    export interface ILogin {
        grant_type: string;
        userName: string;
        password: string;
    }

    export interface ILoginSuccessResult {
        access_token: string;
        token_type: string;
        expires_in: number;
    }
    export interface ILoginFailedResult {
        error: string;
        error_description: string;
    }
    export interface IResetPassword {
        userName: string;
    }
    export interface IResetPasswordResult {

    }

    export interface INewUser {
        userName: string;
        password: string;
        confirmPassword: string;
    }
    export interface INewUserResult { }
}