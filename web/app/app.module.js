define([
   'app/app.config',
   'app/app.run',
   'app/components/auth/js/AuthorisationController',
   'app/components/user/js/UserController',
   'app/components/dashboard/js/DashboardController',
   'app/shared/Auth',
   'app/shared/HTTPInterceptor'
],
function (config, run, AuthorisationController, UserController, DashboardController, Auth, HTTPInterceptor){
    'use strict';

    var processApp = angular.module('processApp',['ngRoute', 'ngResource', 'ngGrid', 'ui.bootstrap', 'ngStorage']);

    processApp.config(config);
    //processApp.constant('urls', {
    //    BASE: 'http://processapp.net/index.php',
    //    BASE_API: 'http://processflow.net/app_dev.php/api'
    //});
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