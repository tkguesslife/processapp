define([], function () {
    'use strict';

    function config($httpProvider, $stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");
        // Now set up the states
        $stateProvider
            .state('signin', {
                url: "/signin",
                templateUrl: "/app/components/auth/views/signin.html",
                controller:  "AuthorisationController"
            })
            .state('app', {
                url: "/",
                templateUrl: "/app/components/app/views/app.html",
                controller:  "AppController"
            })
            .state('app.dashboard', {
                url: "/dashboard",
                templateUrl: "/app/components/dashboard/views/home.html",
                controller:  "DashboardController"
            });

        $httpProvider.interceptors.push('HTTPInterceptor');

    }

    config.$inject=['$httpProvider','$stateProvider', '$urlRouterProvider'];
    return config;

});