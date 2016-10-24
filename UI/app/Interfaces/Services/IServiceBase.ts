module UserTest.Interfaces.Services {
    export interface IServiceBase<T> {
        GetAll: () => ng.IPromise<Array<T>>; 
        Get: (id: number) => ng.IPromise<T>;
        Save: (model: T) => ng.IPromise<T>;
        Update: (id: number, model: T) => ng.IPromise<T>;
        Delete: (id: number) => ng.IPromise<boolean>;
    }
}