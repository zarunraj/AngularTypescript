((): void => {
    var app = angular.module("UserTest", ['ngRoute']);
    app.config(UserTest.Routes.configureRoutes);
   
})() 