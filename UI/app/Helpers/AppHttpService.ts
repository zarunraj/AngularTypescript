module UserTest.Services {
    export class AppHttpService {
        httpService: ng.IHttpService;
        $q: ng.IQService;
        static $inject = ["$http", "$q"];
        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.httpService = $http;
            this.$q = $q;
        }

        Get = (url: string) => {
            var promise = {};
            var deferred = this.$q.defer();
            promise = this.httpService.get(UserTest.Constants.ApiPath + url, UserTest.Constants.HttpJsonConfig)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function (data, status, headers, config) {
                    this.errorHandler(deferred, url);
                    deferred.reject("An error occurred while fetching data from " + UserTest.Constants.ApiPath + url);
                });
            return deferred.promise;
        };
        //***********************

        Post = (url: string, data: any) => {
            var promise = {};
            var deferred = this.$q.defer();
            promise = this.httpService.post(UserTest.Constants.ApiPath + url, JSON.stringify(data), UserTest.Constants.HttpJsonConfig)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function (data, status, headers, config) {
                    this.errorHandler(deferred, url);
                    deferred.reject("An error occurred while fetching data from " + UserTest.Constants.ApiPath + url);
                });
            return deferred.promise;
        };

        //***********************

        PostFormUrlData = (url: string, data: any) => {
            var promise = {};
            var deferred = this.$q.defer();
            promise = this.httpService.post(UserTest.Constants.ApiPath + url, data, UserTest.Constants.HttpFormUrlConfig)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function (data, status, headers, config) {
                    this.errorHandler(deferred, url);
                    deferred.reject(data);
                });
            return deferred.promise;
        };

        //***********************
        Put = (url: string, data: any) => {
            var promise = {};
            var deferred = this.$q.defer();
            promise = this.httpService.put(UserTest.Constants.ApiPath + url, JSON.stringify(data), UserTest.Constants.HttpJsonConfig)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function (data, status, headers, config) {
                    this.errorHandler(deferred, url);
                    deferred.reject("An error occurred while fetching data from " + UserTest.Constants.ApiPath + url);
                });
            return deferred.promise;
        };



        //***********************
        Delete = (url: string) => {
            var promise = {};
            var deferred = this.$q.defer();
            promise = this.httpService.delete(UserTest.Constants.ApiPath + url, UserTest.Constants.HttpJsonConfig)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function (data, status, headers, config) {
                    this.errorHandler(deferred, url);
                    deferred.reject("An error occurred while fetching data from " + UserTest.Constants.ApiPath + url);
                });
            return deferred.promise;
        };

    }
    angular.module("UserTest").service("UserTest.Services.AppHttpService", AppHttpService);
}
function errorHandler (deferred: ng.IDeferred<any>, url: string)  {
    console.log("An error occurred while fetching data from " + UserTest.Constants.ApiPath + url);
};