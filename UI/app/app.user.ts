((): void => {
    var app = angular.module("UserTest", ['ngRoute']);
    app.config(UserTest.User.Routes.configureRoutes);
    app.value('clientId', '');
})() 