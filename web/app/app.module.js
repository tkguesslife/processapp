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

    bootstrapApplication();

    function bootstrapApplication() {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ["processApp"]);
        });
    }
}
);