define([
   'app/app.config',
   'app/app.run',
   'app/components/app/js/AppController',
   'app/components/auth/js/AuthorisationController',
   'app/components/user/js/UserController',
   'app/components/dashboard/js/DashboardController',
   'app/components/auth/js/Auth',
   'app/shared/HTTPInterceptor'
],
function (config, run, AppController, AuthorisationController, UserController, DashboardController, Auth, HTTPInterceptor){
    'use strict';

    var processApp = angular.module('processApp',['ngRoute', 'ngResource', 'ngGrid', 'ui.bootstrap', 'ngStorage', 'ui.router']);

    processApp.config(config);
    processApp.controller('AppController', AppController);
    processApp.controller('AuthorisationController', AuthorisationController);
    processApp.controller('UserController', UserController);
    processApp.controller('DashboardController', DashboardController);
    processApp.factory('Auth', Auth);
    processApp.factory('HTTPInterceptor',HTTPInterceptor);
    processApp.run(run);

    //bootstrapApplication();
    fetchData().then(bootstrapApplication);

    function fetchData() {
        var initInjector = angular.injector(["ng"]);
        var $http = initInjector.get("$http");
        return $http.get('parameters.json')
            .then(function (result) {
                processApp.constant("urls", result.data.urls);
            }, function(errorResponse) {
                // Handle error case
            });
    }

    function bootstrapApplication() {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ["processApp"]);
        });
    }
}
);