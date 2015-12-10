define([
   'app/app.config',
   'app/components/user/js/UserController',
   'app/components/dashboard/js/DashboardController'
],
function (config, UserController, DashboardController){
    'use strict';

    var processApp = angular.module('processApp',['ngRoute', 'ngResource', 'ngGrid', 'ui.bootstrap']);

    processApp.config(config);
    processApp.controller('UserController', UserController);
    processApp.controller('DashboardController', DashboardController);

    fetchData().then(bootstrapApplication);

    function fetchData() {
        var initInjector = angular.injector(["ng"]);
        var $http = initInjector.get("$http");

        return $http.get('init.php')
            .then(function (result) {

                var cfg = {};
                cfg.API_HOST = result.data.API_HOST;
                cfg.token = result.data.token;
                if (result.data.currentUser) {
                    cfg.currentUser = result.data.currentUser;
                    cfg.loggedInUserId = result.data.currentUser.id;
                }
                processApp.constant("cfg", cfg);

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