define([
   'app/app.config',
   'app/components/user/js/UserController'
],
function (config, UserController){
    'use strict';

    var processApp = angular.module('processApp',['ngRoute']);

    processApp.config(config);
    processApp.controller('UserController');

    bootstrapApplication();

    function bootstrapApplication() {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ["gtcUtils"]);
        });
    }
}
)