module UserTest.Services {
    export class ServiceBase<T extends UserTest.Interfaces.Models.IBaseModel> implements UserTest.Interfaces.Services.IServiceBase<T>
    {
        public AppHttpService: UserTest.Services.AppHttpService;
        private Api: string;
        constructor(AppHttpService: UserTest.Services.AppHttpService, api: string) {
            this.AppHttpService = AppHttpService;
            this.Api = api;
        }


        Delete(id: number): ng.IPromise<boolean> {
            var promise: ng.IPromise<boolean>;
            if (id > 0) {
                promise = this.AppHttpService.Delete(this.Api + "/Delete/" + id);
            }
            return promise;
        }

        GetAll(): ng.IPromise<Array<T>> {
            var promise: ng.IPromise<Array<T>>;
            promise = this.AppHttpService.Get(this.Api + "/GetAll");
            return promise;
        }

        Get(id: number): ng.IPromise<T> {
            var promise: ng.IPromise<T>;
            promise = this.AppHttpService.Get(this.Api + "/Get/" + id);
            return promise;
        }

        Save(model: T): ng.IPromise<any> {
            var promise: ng.IPromise<any>;
            if (model.ID && model.ID > 0) {
                promise = this.AppHttpService.Put(this.Api + "/Put/", model);
            }
            else {
                promise = this.AppHttpService.Post(this.Api + "/Post/", model);
            }
            return promise;
        }
        Update(id: number, model: T): ng.IPromise<T> {
            var promise: ng.IPromise<T>;
            if (model.ID && model.ID > 0) {
                promise = this.AppHttpService.Put(this.Api + "/Put/", model);
            }
            else {
                promise = this.AppHttpService.Post(this.Api + "/Post/", model);
            }
            return promise;
        }
    }
}