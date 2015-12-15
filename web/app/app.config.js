define([], function () {
    'use strict';

    function config($routeProvider, $httpProvider) {
        $routeProvider.
            when('/signin',{
                templateUrl: '/app/components/auth/views/signin.html',
                controller: 'AuthorisationController'
            }).
            when('/users/list', {
                templateUrl: '/app/components/user/views/list.html',
                controller: 'UserController'
            }).
            when('/', {
                templateUrl: '/app/components/dashboard/views/home.html',
                controller: 'DashboardController'
            }).
            otherwise({
                redirectTo: '/users/list'
            });

        $httpProvider.interceptors.push('HTTPInterceptor');

    }

    config.$inject=['$routeProvider', '$httpProvider'];
    return config;

});